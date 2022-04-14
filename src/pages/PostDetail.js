//function import
import React from 'react';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//style import
import { Grid, Text, Image } from '../elements/Index';

//page import
import Header from '../components/Header';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';

const Detail = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  //댓글 불러오기
  const id = props.match.params.post_id;

  React.useEffect(() => {
    console.log('useEffect top');
    dispatch(postActions.getOnePostDB(id));
    console.log('useEffect');
  }, []);

  const post = useSelector((state) => state.post.detail);

  console.log(id);
  console.log(post);
  if (!post) {
    return <></>;
  }

  const {
    detail_post: { title, content, img_url, createdAt },
    email,
  } = post;

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
            <Text margin="5px ">{createdAt}</Text>
          </Grid>
          <Image src={img_url} size="20" border_radisu="10px" />
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
