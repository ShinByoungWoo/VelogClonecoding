// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Write from "../pages/Postwrite";
import Main from "../pages/Main";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";


import Join from "../pages/Join";
function App() {

  return (
    <React.Fragment>
      
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={Main} /> */}

        {/* 테스트용 */}
        <Route path="/write" exact component={Write} />
        <Route path="/join" exact component={Join} /> 
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
