import React from "react";
import Modal from "../components/Modal";
import styled, { keyframes } from "styled-components";
import { Grid, Button, Text } from "../elements/Index";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";

import { history } from "../redux/configureStore";

const Login = (props) => {
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
};

export default Login;
