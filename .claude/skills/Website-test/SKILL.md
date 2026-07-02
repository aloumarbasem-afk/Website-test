```markdown
# Website-test Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you how to contribute to the `Website-test` repository, a Next.js JavaScript project. You'll learn the project's coding conventions, file organization, and the main workflows for updating documentation/configuration and developing new UI features. By following these patterns, you can ensure your contributions are consistent, maintainable, and easy for the team to review.

## Coding Conventions

### File Naming
- **Component and Page Files:** Use PascalCase for all component and page file names.
  - Example: `HeroSection.js`, `LandingPage.js`

### Import Style
- **Alias Imports:** Use path aliases for imports instead of relative paths.
  - Example:
    ```javascript
    import Button from '@/components/Button';
    ```

### Export Style
- **Default Exports:** Export components and modules as default.
  - Example:
    ```javascript
    // components/HeroSection.js
    const HeroSection = () => { /* ... */ };
    export default HeroSection;
    ```

## Workflows

### Update Documentation and Config
**Trigger:** When adding new features or addressing review feedback that impacts documentation or deployment setup.  
**Command:** `/update-docs-config`

1. Edit or add details in `README.md` to reflect recent changes.
2. Update or add environment example files (`.env.example`) as needed.
3. Modify deployment configuration files (e.g., `vercel.json`).
4. Update or add `LICENSE` file if licensing changes.
5. Adjust `package.json` for engine requirements or metadata.

**Example:**
```diff
- # Old feature description
+ # Updated feature description

// .env.example
API_URL=https://api.example.com
```

### Feature Development with Component Expansion
**Trigger:** When developing a new landing page section or major UI feature.  
**Command:** `/new-ui-feature`

1. Create or update multiple component files in `components/` using PascalCase.
2. Edit global styles in `app/globals.css` as needed.
3. Update layout or page files (`app/layout.js`, `app/page.js`) to integrate new components.

**Example:**
```javascript
// components/FeatureBanner.js
const FeatureBanner = () => (
  <section className="feature-banner">...</section>
);
export default FeatureBanner;
```

```javascript
// app/page.js
import FeatureBanner from '@/components/FeatureBanner';

export default function HomePage() {
  return (
    <>
      <FeatureBanner />
      {/* other sections */}
    </>
  );
}
```

## Testing Patterns

- **Test File Pattern:** Test files use the `*.test.*` naming convention (e.g., `Button.test.js`).
- **Testing Framework:** Not explicitly specified in the repository.
- **Location:** Place test files alongside the components they test or in a dedicated `__tests__` directory.

**Example:**
```javascript
// components/Button.test.js
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## Commands

| Command              | Purpose                                                         |
|----------------------|-----------------------------------------------------------------|
| /update-docs-config  | Update documentation and configuration files after changes      |
| /new-ui-feature      | Start a new UI feature or landing page section development      |
```
