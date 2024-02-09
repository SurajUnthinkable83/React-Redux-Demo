import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import ConnectedCakeContainer from './components/CakeContainer';
import ConnectedIceCreamContainer from './components/IceCreamContainer';
import CookieContainer from './components/CookieContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedCakeContainer/>
        <HooksCakeContainer/>
        <ConnectedIceCreamContainer/>
        <CookieContainer/>
      </div>
    </Provider>
  );
}

export default App;
