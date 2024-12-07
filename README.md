# Play3ull - Turborepo

This project was created to reach the Fake Store API and display items on the frontend.
I used Turborepo to set up the project using a template that came with tailwindscss.
Context API is being used for state managment of the cart.

This project was made with the assumption that there would be multiple apps all using shared packages.

## Pitfalls:

No Continuous Scroll: The frontend currently doesn't implement infinite scrolling when fetching data from the API.
Overly Complex State Management: The state management solution (Context API) is more intricate than necessary for the current scope of the project.
Unfinished Features: Certain frontend tasks remain incomplete due to time spent exploring "nice-to-have" features and focusing on the project structure.

## TODO:

- Cart page
- Product page
- Auth (Supabase auth?)
- Database
- [Shadcn](https://ui.shadcn.com/)
- SEO
- Storybook for visual testing
- Playwright for additional testing
- Unit tests for BE
- Error handling
- Loading states
- .env variables
- Deploy

## Commands

I used pnpm as a package manager for this project

```sh
# cd into the cloned project and install the packages
pnpm install

# Runs the project in dev
pnpm dev
# Web app running at:  http://localhost:3000
# Apollo server running at: http://localhost:4000

# Codegen
# The Apollo server must be running, run the dev command above and then run
pnpm codegen

# Build
pnpm build
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` application
- `graphql-api`: a graphql [Apollo server](https://www.apollographql.com/docs/apollo-server/getting-started) used for the`web` application
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

Tools:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Graphql Codegen](https://the-guild.dev/graphql/codegen) for codegen
- [Husky](https://github.com/typicode/husky) for precommit
