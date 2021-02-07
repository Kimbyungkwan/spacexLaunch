# Spacex

api -> https://api.spacexdata.com/v3/launches

React & Mobx & Ts
<br>

# Context

```ts
import * as React from 'react';
import RootStore from './rootStrore';

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStores = () => React.useContext(StoreContext);
```
