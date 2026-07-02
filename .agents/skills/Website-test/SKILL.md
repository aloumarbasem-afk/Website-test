```markdown
# Website-test Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `Website-test` JavaScript repository. It covers file naming, import/export styles, commit message patterns, and testing conventions. This guide is designed to help contributors maintain consistency and follow best practices when working on the codebase.

## Coding Conventions

### File Naming
- **PascalCase** is used for file names.
  - Example: `HomePage.js`, `UserProfile.js`

### Imports
- **Alias imports** are preferred.
  - Example:
    ```javascript
    import Utils from 'utils/Utils';
    ```

### Exports
- **Default exports** are used for modules.
  - Example:
    ```javascript
    export default function HomePage() {
      // component code
    }
    ```

### Commit Messages
- **Freeform** style, no strict prefixes.
- Average commit message length: ~67 characters.
  - Example:  
    ```
    Add user authentication logic to HomePage
    ```

## Workflows

### Add a New Feature
**Trigger:** When implementing a new feature or component  
**Command:** `/add-feature`

1. Create a new file using PascalCase (e.g., `NewFeature.js`).
2. Implement the feature logic.
3. Use alias imports for dependencies.
4. Export the feature as default.
5. Write corresponding tests in a `.test.js` file.
6. Commit changes with a descriptive message.

### Update an Existing Component
**Trigger:** When modifying or refactoring a component  
**Command:** `/update-component`

1. Locate the component file (e.g., `UserProfile.js`).
2. Make necessary changes.
3. Ensure imports/exports follow conventions.
4. Update or add tests as needed.
5. Commit with a clear, descriptive message.

### Run Tests
**Trigger:** Before pushing changes or after making updates  
**Command:** `/run-tests`

1. Identify test files matching `*.test.*` pattern.
2. Run the tests using the project's test runner.
   - (Framework is unknown; check project documentation or use a standard JS test runner.)
3. Review and fix any failing tests.

## Testing Patterns

- **Test files** use the `*.test.*` naming pattern (e.g., `HomePage.test.js`).
- The testing framework is **unknown**; refer to project documentation or package.json for details.
- Place tests alongside the modules they test or in a dedicated `tests` directory.

  Example:
  ```javascript
  // HomePage.test.js
  import HomePage from './HomePage';

  test('renders HomePage correctly', () => {
    // test logic here
  });
  ```

## Commands

| Command         | Purpose                                      |
|-----------------|----------------------------------------------|
| /add-feature    | Scaffold and implement a new feature         |
| /update-component | Update or refactor an existing component   |
| /run-tests      | Run all test files before pushing changes    |
```
