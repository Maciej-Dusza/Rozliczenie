import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import { Test } from './Test';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Test />
      </div>
    </Provider>
  );
}

export default App;
