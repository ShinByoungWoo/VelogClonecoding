// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Write from "../pages/Postwrite";
import Main from "../pages/Main";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";


function App() {

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/write" exact component={Write} />
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
