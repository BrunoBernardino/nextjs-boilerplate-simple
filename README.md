# Simple Next.js Boilerplate

[![](https://github.com/BrunoBernardino/nextjs-boilerplate-simple/workflows/Run%20Tests/badge.svg)](https://github.com/BrunoBernardino/nextjs-boilerplate-simple/actions?workflow=Run+Tests)

Simple boilerplate for [Next.js](https://nextjs.org), with [TypeScript](https://www.typescriptlang.org), [SASS/SCSS](https://sass-lang.com), [Styled Components](https://styled-components.com), [Jest](https://jestjs.io), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and deployed with [Vercel](https://vercel.com).

Also supports imports with absolute paths.

Demo at [simple-nextjs-boilerplate.brn.sh](https://simple-nextjs-boilerplate.brn.sh).

See more boilerplates at [nextjs-boilerplates.brn.sh](https://nextjs-boilerplates.brn.sh).

## Development

```bash
make install # installs dependencies
make start # starts the app
make pretty # prettifies the code
make test # runs linting and tests
make test/update # runs tests, updating snapshots
make deploy # deploys to simple-nextjs-boilerplate.brn.sh (requires `vercel` to be installed globally)
```

## TODOs

Here are some things you will likely want to change before "publishing" this, or after cloning it:

- [ ] Analytics code (`usefathom.com`) and `theme-color` in `pages/_document.tsx`
- [ ] Name, repository, author, and version in `package.json`
- [ ] Values in `lib/constants.ts` and `styles/__variables.scss`
- [ ] Scope, alias, and env values in `vercel.json`
- [ ] Values in `.env.sample`
- [ ] Title, description, and links in this `README.md` file
