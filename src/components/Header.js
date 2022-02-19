import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Modal from "./Modal";
import styled from "styled-components";

const Header = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Grid is_flex padding="0px 5rem">
        <Container>
          <Text size="21px" bold>
            velog
          </Text>
        </Container>
        <Text bold center>
          로그인
        </Text>
        <Modal open={modalOpen} close={closeModal} header="로그인 하기"></Modal>
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap");

  * {
    font-family: "Fira Mono", monospace;
  }
`;

export default Header;
