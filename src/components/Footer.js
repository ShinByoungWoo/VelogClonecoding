import React from "react";
import { Grid, Text, Button } from "../elements/Index";

const Footer = () => {
  return (
    <Grid width="47vw" height="100px" bg="#00A9FF" flex>
      <Button width="10vw" height="4rem">
        나가기
      </Button>
      <Button width="10vw" height="4rem">
        임시저장
      </Button>
      <Button width="10vw" height="4rem">
        출간하기
      </Button>
    </Grid>
  );
};

export default Footer;
