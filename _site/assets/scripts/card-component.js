const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display: block;
        font-family: 'Arial', sans-serif; /* Basic fallback font */
        --card-border-radius: 15px;
        --card-bg: #FFF7DE; /* Light yellowish */
        --card-border: 1px solid #D1CDBE;
        --header-bg: #F97A6F; /* Orangey-red */
        --header-text: #FFFFFF;
        --level-bg: #EBEBEB;
        --level-border: 1px solid #B0B0B0;
        --guideline-bar-bg: linear-gradient(to bottom, #E8E8E8, #C8C8C8); /* Metallic look */
        --guideline-bar-text: #333333;
        --body-bg: #FDCB6E; /* Textured orange - used solid color */
        --pill-bg: #D8D8D8;
        --pill-text: #333333;
        --fine-print-text: #555555;
    }

    .card {
        background-color: var(--card-bg);
        border: var(--card-border);
        border-radius: var(--card-border-radius);
        width: 350px; /* Adjust as needed */
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .card-header {
        background-color: var(--header-bg);
        color: var(--header-text);
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
    }

    .level {
        background-color: var(--level-bg);
        color: #000;
        border: var(--level-border);
        border-radius: 10px / 50%; /* Oval shape */
        padding: 2px 10px;
        font-size: 1.1em;
    }

    .sc-number {
        font-size: 1.2em;
    }

    .principle {
        font-size: 1.1em;
    }

    .principle-icon {
        width: 24px;
        height: 24px;
        filter: invert(1) brightness(1.5); /* Make icon whiteish */
        /* In the real card it's red/white, replace with actual icon */
    }

    .card-image-area {
        position: relative;
        background-color: #ddd; /* Placeholder */
        min-height: 150px; /* Placeholder */
        line-height: 0; /* Remove extra space below img */
    }

    .main-image {
        display: block;
        width: 100%;
        height: auto;
    }

    .qr-code {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 60px;
        height: 60px;
        background-color: white; /* QR bg */
        border: 2px solid white;
    }

    .guideline-bar {
        background: var(--guideline-bar-bg);
        color: var(--guideline-bar-text);
        text-align: center;
        padding: 6px 10px;
        font-size: 0.8em;
        font-weight: bold;
        border-top: 1px solid #AAA;
        border-bottom: 1px solid #AAA;
    }

    .card-body {
        background-color: var(--body-bg);
        /* In real card it has texture, simplified here */
        padding: 15px;
        color: #333;
    }

    .ability, .benefit {
        margin-bottom: 15px;
        position: relative; /* For positioning benefit value */
    }

    .ability-header, .benefit-header {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    .ability-icon, .benefit-icon {
       width: 20px;
       height: 20px;
       margin-right: 8px;
       /* Replace with actual star icon */
       background-color: #555; /* Placeholder */
       border-radius: 50%;
    }

    .ability-name, .benefit-name {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        flex-grow: 1; /* Take remaining space */
    }

    .benefit-value {
        font-size: 1.2em;
        font-weight: bold;
        color: #000;
        position: absolute;
        top: 0;
        right: 0;
    }

    .ability-description, .benefit-description {
        font-size: 0.9em;
        margin-left: 28px; /* Indent text */
        line-height: 1.4;
        margin-top: 0;
    }

    .card-footer {
        background-color: var(--body-bg); /* Same as body */
        padding: 0 15px 10px 15px;
        font-size: 0.75em;
        color: var(--fine-print-text);
    }

    .info-pills {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
        flex-wrap: wrap; /* Allow wrapping on small screens if needed */
    }

    .pill {
        background-color: var(--pill-bg);
        color: var(--pill-text);
        border-radius: 10px;
        padding: 3px 8px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.9em;
    }

    .pill img {
        height: 12px;
        width: 12px;
        vertical-align: middle;
        /* background: #888; Placeholder */
    }
    .pill .icon-placeholder { /* Simple text placeholder for icons */
        font-weight: bold;
        display: inline-block;
        min-width: 12px;
        text-align: center;
    }


    .understanding-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 0.9em;
    }

    .fine-print {
       font-size: 0.8em;
       line-height: 1.3;
       margin-bottom: 10px;
       text-align: center;
       padding: 0 5px; /* Small padding */
    }

    .copyright {
        font-size: 0.7em;
        text-align: center;
        color: #888;
        margin-top: 5px;
        margin-bottom: 0;
    }

</style>

<div class="card">
    <header class="card-header">
        <span class="level">A</span>
        <span class="sc-number">SC1.2.2</span>
        <span class="principle">Perceivable</span>
        <!-- Replace with actual icon -->
        <img class="principle-icon" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='%23FFF' stroke-width='10'/%3E%3Ccircle cx='50' cy='50' r='15' fill='%23FFF'/%3E%3C/svg%3E" alt="Perceivable Icon">
    </header>

    <figure class="card-image-area">
        <!-- Replace with actual image -->
        <img class="main-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="Mime Jr. in a tropical setting with visual glitches">
        <!-- Replace with actual QR code image -->
        <img class="qr-code" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAAB3RJTUUH4QsUEQoUKG+HAAAAAA5JREFUOMtj+A8EDAwM/wEAEpAB5rslU0AAAAAASUVORK5CYII=" alt="QR Code linking to Understanding SC 1.2.2">
    </figure>

    <div class="guideline-bar">
        Principle 1 Perceivable - Guideline 1.2 Time-based Media
    </div>

    <section class="card-body">
        <div class="ability">
            <div class="ability-header">
                 <!-- Replace with actual star icon -->
                <div class="ability-icon"></div>
                <h2 class="ability-name">Captions Prerecorded</h2>
            </div>
            <p class="ability-description">Videos can be played with captions. Provide synchronized text for audio content in existing videos.</p>
        </div>

        <div class="benefit">
             <div class="benefit-header">
                 <!-- Replace with actual star icon -->
                <div class="benefit-icon"></div>
                <h2 class="benefit-name">Benefits</h2>
                <span class="benefit-value">+30</span>
            </div>
            <p class="benefit-description">People who are deaf or hard of hearing can understand audio in videos.</p>
        </div>
    </section>

    <footer class="card-footer">
        <div class="info-pills">
            <div class="pill disabilities">
                Disabilities Affected
                <!-- Replace with actual icons -->
                <span class="icon-placeholder" title="Auditory">👂</span>
                <span class="icon-placeholder" title="Cognitive/Auditory">🧠</span>
            </div>
            <div class="pill user-impact">User Impact: Critical</div>
            <div class="pill roles">
                Roles
                <!-- Replace with actual icons -->
                <span class="icon-placeholder" title="Content Creator">📄</span>
                <span class="icon-placeholder" title="Developer">🖋️</span>
            </div>
        </div>

        <div class="understanding-info">
            <span class="understanding-link">Understanding Captions</span>
            <span class="pokedex-number">#0439 Mime Jr.</span>
        </div>

        <p class="fine-print">
            Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
        </p>

        <p class="copyright">
            ©2025 Accessibility First / WCAG 2.2 / Pokedex of Accessibility
        </p>
    </footer>
</div>
`;

class PokeWcagCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Replace placeholder images if you have URLs (optional example)
        // You'd likely pass these in as attributes or properties in a real app
        const mainImg = this.shadowRoot.querySelector('.main-image');
        // mainImg.src = 'path/to/your/mime-jr-image.jpg'; // Replace with actual path

        const qrImg = this.shadowRoot.querySelector('.qr-code');
        // qrImg.src = 'path/to/your/qr-code.png'; // Replace with actual path
    }
}

customElements.define('poke-wcag-card', PokeWcagCard);