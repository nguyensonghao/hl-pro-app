import React from 'react';
import { Provider } from 'react-redux';

import RootNavigation from './App/Navigations/RootNavigation/RootNavigation';
import store from './App/Reducers/CreateStore';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    </>
  )
}

export default App;