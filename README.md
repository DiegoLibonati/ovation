# Ovation

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Getting Started

1. Clone the repository
2. Navigate to the project folder
3. Execute: `npm install`
4. Execute: `npm run dev`

The application will open automatically at `http://localhost:3000`

## Description

**Ovation** is a single-page web application that displays a testimonials carousel, allowing users to browse through a collection of reviews one at a time. Each review card shows the reviewer's photo, full name, professional role, and a written testimonial.

Users can navigate the carousel in three ways: the **Previous** and **Next** buttons step through reviews sequentially, wrapping around at both ends so the experience is always continuous. The **Surprise Me** button picks a random review from the collection and jumps directly to it, offering a quick way to discover testimonials without clicking through them in order.

The application is built as a lightweight, dependency-free carousel — no external carousel library is used. Navigation state is managed locally inside the `ReviewCard` component using React's `useState` hook, and index boundary logic is handled by a pure utility function that ensures the index always stays within the valid range of the reviews array.

The UI is fully static: review data is hardcoded in a typed constants file (`src/constants/reviews.ts`) using a `Review` type defined in `src/types/app.ts`. This makes the data structure explicit and easy to extend with new entries.

The project is covered by a Jest test suite that tests the core navigation logic (`handleIndex`), the `ReviewCard` component interactions, and the `ReviewsPage` rendering — enforcing a minimum 70% coverage threshold across branches, functions, lines, and statements.

## Technologies used

1. React JS
2. TypeScript
3. Vite
4. HTML5
5. CSS3

## Libraries used

#### Dependencies

```
"react": "^19.2.4"
"react-dom": "^19.2.4"
"react-icons": "^4.4.0"
```

#### devDependencies

```
"@eslint/js": "^9.0.0"
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/react": "^16.0.1"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^30.0.0"
"@types/react": "^19.2.14"
"@types/react-dom": "^19.2.3"
"@vitejs/plugin-react": "^5.0.2"
"eslint": "^9.0.0"
"eslint-config-prettier": "^9.0.0"
"eslint-plugin-prettier": "^5.5.5"
"eslint-plugin-react-hooks": "^5.0.0"
"eslint-plugin-react-refresh": "^0.4.0
"globals": "^15.0.0"
"husky": "^9.0.0"
"jest": "^30.3.0"
"jest-environment-jsdom": "^30.3.0"
"lint-staged": "^15.0.0"
"prettier": "^3.0.0"
"ts-jest": "^29.4.6"
"typescript": "^5.2.2"
"typescript-eslint": "^8.0.0"
"vite": "^7.1.6"
```

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/ovation`](https://www.diegolibonati.com.ar/#/project/ovation)

## Testing

1. Navigate to the project folder
2. Execute: `npm test`

For coverage report:

```bash
npm run test:coverage
```

## Security

### npm audit

Check for vulnerabilities in dependencies:

```bash
npm audit
```

### React Doctor

Run a health check on the project (security, performance, dead code, architecture):

```bash
npm run doctor
```

Use `--verbose` to see specific files and line numbers:

```bash
npm run doctor -- --verbose
```

## Known Issues

None at the moment.
