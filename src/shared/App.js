// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Login from "../pages/Login";
import Header from "../components/Header";
import Test from "../pages/Test";
import Modal from "../components/Modal";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Test} />
        <Route path="/login" exact component={Login} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
