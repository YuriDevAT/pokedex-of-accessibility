document.addEventListener('DOMContentLoaded', function() {
    // Function to load the content dynamically into the placeholders
    function loadContent() {
        // Load header content
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.log('Error loading header:', error));

        // Load footer content
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => console.log('Error loading footer:', error));

        // Optionally, you can add the head content dynamically (not usually done)
        fetch('head.html')
            .then(response => response.text())
            .then(data => {
                document.head.innerHTML += data;  // Append to the head section
            })
            .catch(error => console.log('Error loading head:', error));
    }

    // Load the common content when the page is ready
    loadContent();
});


// shuffle
document.addEventListener('DOMContentLoaded', () => {
    // Ensure data is loaded (it should be, as data.js is included before script.js)
    if (typeof wcagData === 'undefined' || typeof filterKeywords === 'undefined') {
        console.error("Error: WCAG data or filter keywords not found. Make sure data.js is loaded correctly.");
        document.getElementById('sc-list-container').innerHTML = '<p class="no-results-message">Error loading data.</p>';
        return;
    }

    const filterChipsContainer = document.getElementById('filter-chips-container');
    const scListContainer = document.getElementById('sc-list-container');
    const scCountElement = document.getElementById('sc-count');
    const activeFilterListElement = document.getElementById('active-filter-list');

    let activeFilters = new Set(); // Use a Set for efficient add/delete/check

    // --- 1. Generate Filter Chips ---
    function generateFilterChips() {
        filterKeywords.sort().forEach(keyword => {
            const chip = document.createElement('button');
            chip.classList.add('filter-chip');
            chip.textContent = keyword;
            chip.dataset.keyword = keyword.toLowerCase(); // Store lowercase for matching
            chip.setAttribute('role', 'checkbox'); // Semantically a toggle
            chip.setAttribute('aria-checked', 'false');
            chip.addEventListener('click', handleFilterChipClick);
            filterChipsContainer.appendChild(chip);
        });
    }

    // --- 2. Generate Success Criteria Cards ---
    function generateScCards() {
        scListContainer.innerHTML = ''; // Clear loading message or previous results

        if (wcagData.length === 0) {
            scListContainer.innerHTML = '<p class="no-results-message">No Success Criteria data available.</p>';
            return;
        }

        wcagData.forEach(sc => {
            const card = document.createElement('div');
            card.classList.add('sc-card');
            card.dataset.id = sc.id; // Optional: useful for direct linking/reference

            // Store keywords on the element for easy filtering
            card.dataset.keywords = JSON.stringify(sc.keywords.map(k => k.toLowerCase()));

            card.innerHTML = `
                <h3>${sc.id} ${sc.name} <span class="sc-level sc-level-${sc.level}">${sc.level}</span></h3>
                <div class="sc-meta">
                    <strong>Principle:</strong> ${sc.principle} <br>
                    <strong>Guideline:</strong> ${sc.guideline}
                </div>
                <h4>Description:</h4>
                <p>${sc.description}</p>
                <h4>How to Meet:</h4>
                <p>${sc.howToMeet}</p> <!-- Consider using innerHTML if 'howToMeet' contains HTML -->
                <h4>Why it's Important:</h4>
                <p>${sc.whyImportant}</p>
                <h4>Keywords:</h4>
                <p><em>${sc.keywords.join(', ')}</em></p>
            `;
            scListContainer.appendChild(card);
        });
    }

    // --- 3. Handle Filter Chip Clicks ---
    function handleFilterChipClick(event) {
        const chip = event.target;
        const keyword = chip.dataset.keyword;

        // Toggle active state
        chip.classList.toggle('active');
        const isActive = chip.classList.contains('active');
        chip.setAttribute('aria-checked', isActive ? 'true' : 'false');


        if (isActive) {
            activeFilters.add(keyword);
        } else {
            activeFilters.delete(keyword);
        }

        applyFilters();
    }

    // --- 4. Apply Filters and Update Display ---
    function applyFilters() {
        const allScCards = scListContainer.querySelectorAll('.sc-card');
        let visibleCount = 0;

        allScCards.forEach(card => {
            const cardKeywords = JSON.parse(card.dataset.keywords || '[]'); // Get keywords from data attribute
            let isMatch = true; // Assume match initially

            if (activeFilters.size > 0) {
                // Check if *at least one* active filter keyword is present in the card's keywords (OR logic)
                isMatch = [...activeFilters].some(filterKeyword => cardKeywords.includes(filterKeyword));

                 // --- ALTERNATIVE: AND logic ---
                 // Uncomment below and comment out the .some() line above if you want results
                 // that match *ALL* active filters instead of *ANY*.
                 // isMatch = [...activeFilters].every(filterKeyword => cardKeywords.includes(filterKeyword));
                 // --- End of AND logic ---
            }

            // Show or hide based on match
            if (isMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Update count display
        scCountElement.textContent = visibleCount;

        // Update active filter list display
        if (activeFilters.size === 0) {
            activeFilterListElement.textContent = "None";
        } else {
            activeFilterListElement.textContent = [...activeFilters].join(', ');
        }


        // Show "no results" message if applicable
        const noResultsMessage = scListContainer.querySelector('.no-results-message');
        if (visibleCount === 0 && wcagData.length > 0) {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.classList.add('no-results-message');
                message.textContent = 'No Success Criteria match the selected filters.';
                scListContainer.appendChild(message);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    }

    // --- Initial Setup ---
    generateFilterChips();
    generateScCards();
    applyFilters(); // Call initially to set the count and state correctly
});