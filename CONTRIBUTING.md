# Contributing Guide

## Issues & Pull Requests

### Creating an Issue

Before **creating** an Issue for `features`/`bugs`/`improvements` please follow these steps:

1. search existing Issues before creating a new issue (has someone raised this already)
1. if it doesn't exist create a new issue giving as much context as possible (please select the correct Issue type, for example `bug` or `feature`)
1. all Issues are automatically given the label `status: waiting for triage` and are automatically locked so no comments can be made
1. if you wish to work on the Issue once it has been triaged and label changed to `status: ready for dev`, please include this in your Issue description

### Working on an Issue (get it assigned to you)

Before working on an existing Issue please follow these steps:

1. only ask to be assigned 1 **open** issue at a time
1. look out for the Issue label `status: ready for dev` (if it does not have this label, your work might not be accepted)
1. comment asking for the issue to be assigned to you
1. after the Issue is assigned to you, you can start working on it
1. **only** start working on this Issue (and open a Pull Request) when it has been assigned to you - this will prevent confusion, multiple people working on the same issue and work not being used
1. reference the Issue in your Pull Request (for example `closes #123`)
1. please do **not** force push to your PR branch, this makes it very difficult to re-review - commits will be squashed when merged

> Notes:
>
> - it is not sustainable for maintainers to review historical comments asking for assignments before the Issue label `status: ready for dev` was added; only requests for assignment of an Issue after this label has been added will be considered
> - check the `Assignees` box at the top of the page to see if the issue has been assigned to someone else before requesting this be assigned to you
> - if an Issue is unclear, ask questions to get more clarity before asking to have the Issue assigned to you
> - only request to be assigned an Issue if you know how to work on it
> - an Issue can be assigned to multiple people, if you all agree to collaborate on the issue (the Pull Request can contain commits from different collaborators)
> - any Issues that have no activity after 2 weeks will be unassigned and re-assigned to someone else

## Reviewing Pull Requests

I will review the PR as soon as time allows. Please refrain from notifying me that you opened a PR.

## Tech Stack

Pokedex of accessibility ist created using [Eleventy](https://www.11ty.dev/).

### Prerequisites

Before contributing or adding a new feature, please make sure you have already installed the following tools:

- NodeJS (version 18 or newer) [install NodeJS](https://nodejs.org/en/download/).

### Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

### Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal, go to the directory where you want the project to be saved and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/this-is-you/pokedex-of-accessibility.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the pokedex-of-accessibility repository on GitHub to your computer.

### Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd pokedex-of-accessibility
```

Open the project in Visual Studio Code (or your favorite code editor):

```
code .
```

Install the dependencies:

```
npm install
```

Run the project:

```
npm run start
```

Now create a branch using the `git checkout -b` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b name-of-issue
```

### Make necessary changes and commit those changes

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add filename
```

Now commit those changes using the `git commit` command:

```
git commit -m "Name of issue"
```

#### Commit message

There are different ways of writing a commit message. For more reference checkout the
article about [How to write a good commit message](https://dev.to/chrissiemhrk/git-commit-message-5e21).

For this project we are going to use following style:

**type-of-issue- + number-of-issue[action you took]**

Practical example:

`feature-11[Fix typo in README.md]`

### Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin -u <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

### Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.
