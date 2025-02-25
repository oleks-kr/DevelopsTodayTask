# Cypress Test Automation for Playlist App

This project contains end-to-end tests for the Playlist App, written in [Cypress](https://www.cypress.io/). The tests validate the core functionality of adding tracks to the playlist and verifying the total duration of all tracks.

## Setup Instructions

Follow these steps to set up and run the tests locally.

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/oleks-kr/cypress-playlist-tests.git

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:

cd cypress-playlist-tests
npm install

This will install Cypress along with any other necessary dependencies listed in the package.json.

### 3. Open Cypress Test Runner (Optional)
To run the tests interactively in the Cypress Test Runner:

npx cypress open
This opens the Cypress Test Runner where you can select and run specific tests interactively.

### 4. Run Tests in Headless Mode
To run the tests in headless mode (without the UI):

npm run test

This will execute all the tests in the cypress/e2e folder.

### 5. Writing Tests
Test files are located in the cypress/e2e folder. You can modify existing tests or create new ones to suit your needs.
