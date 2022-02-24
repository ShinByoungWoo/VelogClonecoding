//function import
import React from "react";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//style import
import { Grid, Text, Image } from "../elements/Index";

//page import
import Header from "../components/Header";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const Detail = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  // const post_id = props.match.params.postid;
  // React.useEffect(() => {
  //   dispatch(postActions.getOnePostFB(post_id));
  //   dispatch(commentActions.getOneCommentFB(post_id));
  // }, []);

  //댓글 불러오기
  const id = props.match.params.post_id;

  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(id));
  }, []);

  const post_list = useSelector((state) => state.post.detail);

  console.log(id);
  console.log(post_list);

  const title = post_list.detail_post.title;
  const email = post_list.email;
  const content = post_list.detail_post.content;
  const createDate = post_list.detail_post.createdAt;
  const img_url = post_list.detail_post.img_url;
  const post_id = post_list.detail_post.post_id;

  return (
    <React.Fragment>
      <Header />
      <Grid padding="0px 6rem">
        <Grid margin="5.5rem auto 0px auto" center width="40rem">
          <Text size="48px" bold line_height="1.5">
            {title}
          </Text>
          <Grid is flex>
            <Text margin="5px ">{email}</Text>
            <Text margin="5px ">{createDate}</Text>
          </Grid>
          <Image
            src={img_url}
            size="20"
            border_radisu="10px"
          />
          <Text size="18px" line_height="1.5">
            {content}
          </Text>
        </Grid>
        <CommentWrite />
        <CommentList />
      </Grid>
    </React.Fragment>
  );
};

export default Detail;
