Cloud-Talk Playwright BDD Testing Project:

    UI

    .Installation and Setup
Follow these steps to get your local environment ready to run the tests.

    A. Clone the Repository
First, clone the repository to your local machine:

git clone [YOUR REPO URL HERE]

cd Cloud-Talk-Test-Task

    B. Install Dependencies
Install all necessary Node.js packages, including Playwright and Playwright BDD:

npm install

    C. Install Playwright Browsers
Playwright requires specific browser binaries (Chromium, Firefox, WebKit) to be installed locally.

npx playwright install

2. Running Tests

Generate tests:

npx playwright-bdd

Run test with UI:

npx playwright test --ui

    3. Project Structure
The project follows standard Playwright and BDD conventions:

tests/features/ - Contains all Gherkin .feature files (e.g., login.feature).

tests/steps/ - Contains all TypeScript step definition files (.ts) that implement the logic for Gherkin steps.

tests/steps/bdd.setup.ts - Defines and extends the base Playwright test object for BDD fixtures.

constants/ - Stores reusable constants like URLs, locators, and test data.

playwright.config.ts - The main configuration file for Playwright and Playwright BDD paths.

    Notes:
Project also contains oldtests folder, which is now not in use, but I kept it as alternative way.


    K6

    1. Installation

brew install k6
    
    2. Run

k6 run performance/scenarios/loadTest.js


    API

    1. Run

npx playwright test --project=api-converter