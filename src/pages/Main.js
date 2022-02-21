import React from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import { Grid, Input } from "../elements/Index";

const Main = () => {
  return (
    <React.Fragment>
      <Grid is_flex padding="0px 6rem" flex_wrap>
        <Header />
        <Post />
      </Grid>
    </React.Fragment>
  );
};

export default Main;
