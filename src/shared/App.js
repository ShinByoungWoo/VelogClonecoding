//function import
import React from "react";
import "./App.css";
import Modal from "../components/Modal";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

//Page Import
import Login from "../pages/Join";

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="로그인 하기"></Modal>
    </React.Fragment>
  );
}

export default App;
