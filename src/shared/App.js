// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Write from "../pages/Postwrite";
import Main from "../pages/Main";
import Detail from "../pages/PostDetail";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Login from "../pages/Login";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Write} />
        <Route path="/write/:post_id" exact component={Write} />
        <Route path="/Detail/:post_id" exact component={Detail} />
        <Route path="/Detail" exact component={Detail} />
        <Route path="/login" exact component={Login} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
