# About

`SW BaseExp` is learning project. It uses fine https://swapi.info/ (in the place of a little slow https://swapi.dev/)

# TODO in my spare time:

> **Continued in another project** (Nx powered monorepo)
  https://github.com/mrudowski/nxExp/tree/main/apps/sw-base

- add vitest and tests
- ✅ ~~absolute imports~~
- useSuspenseQuery
- useSuspenseQueries
- add cancellation https://github.com/sindresorhus/ky#cancellation
- try zod https://tkdodo.eu/blog/type-safe-react-query#zod
- use react router outlet context https://reactrouter.com/en/main/hooks/use-outlet-context
- custom errors status
- find lint to force sort properties alphabetically in i18n resources
- packing related utils methods in object before exporting
- create monorepo when we can test react vs nextjs / remix / astro / gatsby solution
- turn off noImplicitAny

# Environment requirements

- node 18.17.1
  - best with windows version switcher: https://github.com/coreybutler/nvm-windows
  - mac/linux: https://github.com/nvm-sh/nvm
  ```
  nvm install 18.17.1
  nvm use 18.17.1
  ```
- yarn 1.22.19 or some later classic version (https://classic.yarnpkg.com/en/docs/install)
  ```
  npm install --global yarn
  ```
  
# Install deps and run 

```
yarn
yarn start
```

# Checks for known security issues with the installed packages

```
yarn audit
yarn audit --groups dependencies // only in dependencies group
```