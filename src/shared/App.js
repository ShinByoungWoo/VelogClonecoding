// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Login from "../pages/Login";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Main from "../pages/Main";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={Main} /> */}

        {/* 테스트용 */}
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
