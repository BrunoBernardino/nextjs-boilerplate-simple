# Simple Next.js Boilerplate

[![](https://github.com/BrunoBernardino/nextjs-boilerplate-simple/workflows/Run%20Tests/badge.svg)](https://github.com/BrunoBernardino/nextjs-boilerplate-simple/actions?workflow=Run+Tests)

Simple boilerplate for [Next.js](https://nextjs.org), with [TypeScript](https://www.typescriptlang.org), [SASS/SCSS](https://sass-lang.com), [Styled Components](https://styled-components.com), [Jest](https://jestjs.io), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and deployed to AWS with [Serverless](https://serverless.com).

Also supports imports with absolute paths.

Demo at [simple-nextjs-boilerplate.onbrn.com](https://simple-nextjs-boilerplate.onbrn.com).

See more boilerplates at [nextjs-boilerplates.onbrn.com](https://nextjs-boilerplates.onbrn.com).

## Development

```bash
make install  # installs dependencies
make start  # starts the app
make pretty  # prettifies the code
make test  # runs linting and tests
make test/update  # runs tests, updating snapshots
make deploy  # deploys to simple-nextjs-boilerplate.onbrn.com (requires `serverless` to be installed globally)
```

**NOTE:** If you're looking for the previous version which deployed to Vercel, [this was the latest commit with it](https://github.com/BrunoBernardino/nextjs-boilerplate-simple/tree/01b932f3bd777cda92610c4f8c2cd7dd5bffd975).

## TODOs

Here are some things you will likely want to change before "publishing" this, or after cloning it:

- [ ] Analytics code (`usefathom.com`) and `theme-color` in `pages/_document.tsx`
- [ ] Name, repository, author, and version in `package.json`
- [ ] Values in `lib/constants.ts` and `styles/__variables.scss`
- [ ] Service name, domain, and env values in `serverless.yml`
- [ ] Values in `.env.sample`
- [ ] Title, description, and links in this `README.md` file
