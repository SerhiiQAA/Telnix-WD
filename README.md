# Telnix WebDriverIO Automation

A test automation project for a web application using **WebDriverIO** and **TypeScript**, with support for **OOP**, **Allure Reporting**, **GitHub Actions**, **GitHub Pages**, and **Docker** for isolated test execution.

## Technologies

- **WebDriverIO** — Test automation framework.
- **TypeScript** — For static typing and better IDE support.
- **OOP** — Object-Oriented Programming principles for page objects.
- **Allure Report** — For generating test reports.
- **GitHub Actions** — CI/CD pipeline for automated testing.
- **GitHub Pages** — For hosting Allure reports.
- **Docker** — For running tests in isolated containers.

## Project Structure

- **`/test`** — Test files.
- **`/test/pageobjects`** — Page objects implemented with OOP.
- **`/test/specs`** — Test scripts.
- **`/config`** — WebDriverIO configuration files.

## How it works:

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/Telnix-WebdiverIO-TS.git

2. Navigate into the project directory:
   ```bash
   cd Telnix-WebdiverIO-TS

3. Install dependencies:
   ```bash
   npm install
   ```

### Run tests:

```bash
npm run test
```

## Run tests for specific device screens:

1. Mobile:
   ```bash
   npm run test:mobile

2. Tablet:
   ```bash
    npm run test:tablet

3. Desktop:
   ```bash
   npm run test:desktop
   ```

## Allure report:

1. Generate Allure report:
   ```bash
   npm run report:generate
   ```

2. Open Allure report:
   ```bash
    npm run report:open

3. Clean up report:
   ```bash
    npm run clean


## GitHub Actions

CI/CD setup with GitHub Actions for running tests on every push. Configuration is available in .github/workflows/ci.yml.

## Docker Usage:

1. To run tests in Docker:
   ```bash
   docker-compose up --build

# Allure Reporting:

1. Generate Allure reports after test execution:
   ```bash
   npm run report:generate
   npm run report:open

## GitHub Pages
Publish Allure reports to GitHub Pages for easy access and sharing.

## License

This project is licensed under the MIT License.