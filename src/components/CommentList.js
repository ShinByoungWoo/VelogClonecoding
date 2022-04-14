import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../elements/Index';

const CommentList = (props) => {
  const comment_list = useSelector((state) => state.post.list);

  return (
    <React.Fragment>
      <Text>이렇게 하면 댓글이 달리나요</Text>
    </React.Fragment>
  );
};

export default CommentList;
