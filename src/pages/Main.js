import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
//pages
import Post from "../components/Post";
import Header from "../components/Header";
//style
import { Grid } from "../elements/Index";
import styled from "styled-components";

const Main = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  // const user_nick = localStorage.getItem("user_nick");

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <Grid is_flex padding="0px 6rem" flex_wrap>
        <Header />
        {post_list.map((p, idx) => (
          <Wrap key={idx}>
            <Post {...p} />
          </Wrap>
        ))}
        <Post />
      </Grid>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  dispaly: flex;
`;

export default Main;
