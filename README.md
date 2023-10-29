# About

https://swapi.dev/  is slow and neart dead
I use ...


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