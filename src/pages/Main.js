import React from "react";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

//pages
import Post from "../components/Post";
import Header from "../components/Header";

//style
import { Grid } from "../elements/Index";
import styled from "styled-components";
import { BsGraphUp } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Main = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  const post_list = useSelector((state) => state.post.list);


  console.log(post_list);

  // const user_nick = localStorage.getItem("user_nick");
  return (
    <React.Fragment>
      <Header />

      <div style={{ display: "flex" }}>
        <SubTitle>
          <BsGraphUp />
          트랜딩
        </SubTitle>

        <SubTitle>
          <BiTimeFive /> 최신
        </SubTitle>
      </div>

      <Grid is_flex padding="0px 6rem" flex_wrap>
        {post_list.map((p, idx) => (
          <Wrap key={idx}>
            <Post
              {...p}
              // onClick={() => {
              //   history.push(`/post/${post_id}`);
              // }}
            />
          </Wrap>
        ))}
        <Post />
      </Grid>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const SubTitle = styled.div`
  margin-left: 16px;
  display: flex;
  padding: 10px 0px;
  justify-content: flex-start;
  cursor: pointer;
`;

export default Main;
