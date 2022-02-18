// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Modal from "../components/Modal";

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
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Test} />
        <Route path="/login" exact component={Login} />
        <button onClick={openModal}>모달팝업</button>
        <Modal open={modalOpen} close={closeModal} header="로그인 하기"></Modal>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
