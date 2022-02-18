import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Modal from "./Modal";

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
      <Grid is_flex padding="0px 0px 0px 16px">
        <Text size="25px" bold>
          Veloginplease
        </Text>
        <Button
          color="#000000"
          width="50px"
          text="로그인"
          _onClick={openModal}
        />
        <Modal open={modalOpen} close={closeModal} header="로그인 하기"></Modal>
      </Grid>
    </React.Fragment>
  );
};

export default Header;