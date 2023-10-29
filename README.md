# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


### Environment requirements

- `node` version 18.17.1
- `npm` version 9.6.7
- `yarn` version 1.22.19

# System requirements

- node 16.13.1
    - best with windows version switcher: https://github.com/coreybutler/nvm-windows
    - mac/linux: https://github.com/nvm-sh/nvm
  ```
  nvm install 16.13.1
  nvm use 16.13.1
  ```
- yarn 1.22.19 or some later classic version (https://classic.yarnpkg.com/en/docs/install)
  ```
  npm install --global yarn
  ```
  
# Run 

yarn && yarn start



```
yarn dev
```


# Checks for known security issues with the installed packages

```
yarn audit
yarn audit --groups dependencies // only in dependencies group
```


https://swapi.dev/  is slow and neart dead
I use ...
