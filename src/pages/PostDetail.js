import React from "react";
import { Grid } from "../elements/Index";

import Header from "../components/Header";
import PostD from "../components/PostDetail";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const Detail = () => {
  return (
    <React.Fragment>
      <Grid padding="0px 6rem">
        <Header />
        <PostD />
        <CommentWrite />
        <CommentList />
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
