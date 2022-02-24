import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input, Button, Text } from "../elements/Index";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
  // const user_nick = localStorage.getItem("user_nick");
  // const { post_id } = props;
  console.log(props)
  const {post_id} = props;

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const commentRef = useRef();

  const addComment = () => {

    dispatch(commentActions.addCommentFB(comment, post_id));
    commentRef.current.value = '';
  };

  return (
    <React.Fragment>
      <Grid is_flex margin="5.5rem auto 0px auto" center width="40rem">
        <Input
          value={comment}
          ref={commentRef}
          _onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="댓글을 입력해주세요:>"
        />
        <Button
          width="55px"
          height="43px"
          margin="0px 2px"
          padding="0px 9px"
          cursor="pointer"
          _onClick={addComment}
        >
          <Text margin="0px">작성</Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
