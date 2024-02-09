import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
// import ConnectedCakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ConnectedCakeContainer/> */}
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
