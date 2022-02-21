// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Write from "../pages/Postwrite";
import Main from "../pages/Main";
import Detail from "../pages/PostDetail";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Write} />
        <Route path="/Detail" exact component={Detail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
