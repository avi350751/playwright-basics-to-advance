# Playwright Practice Repo

A progressive learning project for mastering Playwright testing framework, from basics to advanced concepts.

## About Playwright

**Playwright** is a modern end-to-end testing framework developed by Microsoft that enables reliable testing of web applications across different browsers and platforms. It provides a powerful API for automating user interactions and validating application behavior.

### Key Features
- **Cross-browser support**: Test on Chromium, Firefox, and WebKit
- **Fast & reliable**: Parallel test execution with automatic retries
- **Developer-friendly**: Simple API with excellent debugging tools
- **Auto-waiting**: Built-in smart waiting mechanisms for elements
- **Multiple languages**: JavaScript/TypeScript, Python, Java, .NET support

## Project Structure

```
playwright-0502/
├── package.json                 # Project metadata and dependencies
├── playwright.config.js         # Playwright configuration
├── README.md                    # This file
├── tests/
│   ├── example.spec.js         # Example: Real-world web testing
│   └── sample.spec.js          # Sample: Basic assertions and tests
├── playwright-report/          # Generated test reports (HTML)
│   ├── index.html
│   └── data/
└── test-results/               # Test execution results
    └── sample-My-second-test-chromium/
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd d:\PlaywrightProjects\playwright-0502
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test` - The main Playwright testing framework
   - `@types/node` - TypeScript definitions for Node.js

### Configuration

The project uses `playwright.config.js` with the following setup:
- **Test directory**: `./tests`
- **Parallel execution**: Tests run in parallel for faster execution
- **Browser**: Chromium (Desktop Chrome)
- **Reporter**: HTML test report generation
- **Trace**: Captures traces on first retry for debugging failed tests

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run specific test file
```bash
npx playwright test tests/example.spec.js
```

### Run tests with debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

## Test Files Overview

### 1. **sample.spec.js** - Basics
- **Purpose**: Foundational Playwright concepts
- **Tests**:
  - `My first test`: Basic assertion with `expect()`
  - `My second test`: Expected failure example
  - `My third test`: String and boolean assertions
- **Concepts**: Simple assertions, test structure, console logging

### 2. **example.spec.js** - Real-World Testing
- **Purpose**: End-to-end web application testing
- **Tests**:
  - `has title`: Validate page title using regex matching
  - `get started link`: Navigate, interact, and assert visibility
- **Concepts**: Page navigation, element selection, role-based queries, assertions

## Learning Path

This project progresses through Playwright fundamentals:

### Phase 1: Basics (sample.spec.js)
- Writing your first test
- Understanding test structure
- Using expectations and assertions
- Running tests

### Phase 2: Web Automation (example.spec.js)
- Navigating to URLs
- Selecting elements (role-based queries)
- User interactions
- Validating page content

### Phase 3 & Beyond (Ready to expand)
- Advanced selectors and locators
- Handling multiple pages and contexts
- Network interception and mocking
- Custom test hooks and fixtures
- Performance testing
- Visual regression testing
- CI/CD integration

## Useful Playwright APIs

### Navigation & Page Interaction
```javascript
await page.goto('https://example.com');
await page.click('button');
await page.fill('input[type="text"]', 'text');
```

### Element Selectors
```javascript
page.getByRole('button', { name: 'Submit' })
page.getByPlaceholder('Enter name')
page.getByText('Welcome')
```

### Assertions
```javascript
await expect(page).toHaveTitle('Title')
await expect(element).toBeVisible()
await expect(element).toContainText('text')
```

## Test Reports

After running tests, HTML reports are generated in the `playwright-report/` directory. View them with:
```bash
npx playwright show-report
```

## Troubleshooting

### Tests fail with "Connection refused"
- Ensure you have internet connectivity for remote URLs
- Check if target website is accessible

### Element not found
- Use `--debug` mode to inspect elements
- Use `page.pause()` to stop execution for inspection
- Check selectors with browser developer tools

### Slow test execution
- Tests run in parallel by default; check system resources
- Consider reducing `workers` in `playwright.config.js`

## Resources

- [Playwright Official Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

## Next Steps

1. Run the existing tests to understand the framework
2. Modify test selectors to interact with different elements
3. Add new test files for additional scenarios
4. Explore different browsers (Firefox, WebKit)
5. Implement page object models for better test organization
6. Integrate with CI/CD pipelines

---

**Happy Testing! 🎭**
