# Spacex

api -> https://api.spacexdata.com/v3/launches

React & Mobx & Ts
<br>
<br>

# Prettier Eslint 
```
npm i -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
```
```json
.eslintrc
{
  "extends": [
    "prettier",
    "airbnb",
    "airbnb/hooks",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"]
}
```
```json
.prettierrc
{
  "singleQuote": true,
  "parser": "typescript",
  "semi": true,
  "useTabs": true,
  "printWidth": 120
}
```
```json
package.json
{
  //...
  "scripts": {
    "prettier": "prettier --write --config ./.prettierrc \"**/*.{ts,tsx}\"",
    "lint": "eslint './src/**/*.{ts,tsx}'",
    "lint:fix": "eslint --fix './src/**/*.{ts,tsx}'"
  }
  //...
}
```



# Context

```ts
import * as React from 'react';
import RootStore from './rootStrore';

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStores = () => React.useContext(StoreContext);
```
