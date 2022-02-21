//function import
import React from "react";
import "../shared/modal.css";
import Modal_login from "../components/Modal_login";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

//Page Import
import Login from "../pages/Join";
import Header from "../components/Header";
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
      <Header />
      <button onClick={openModal}>모달팝업</button>
      <Modal_login
        open={modalOpen}
        close={closeModal}
        header="이게 되네"
      ></Modal_login>
    </React.Fragment>
  );
}

export default App;
