import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from './Login/Login';
import { Transactions } from './Transactions/Transactions';
import { Statistics } from './Statistics/Statistics';
import { NotFound } from './NotFound/NotFound';
import { Header } from './Header/Header'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (<Login />)} />
          <Route path="/transactions" render={() => (<Transactions />)} />
          <Route path="/statistics" render={() => (<Statistics />)} />
          <Route render={() => (<NotFound />)} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
