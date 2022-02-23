import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Text, Image } from "../elements/Index";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Post = (props) => {
  // const dispatch = useDispatch();

  // console.log(
  //   props.title,
  //   props.content,
  //   props.createDate,
  //   props.img_url,
  //   props.post_id
  // );

  const title = props.title;
  // const nickname = props.nickname;
  const content = props.content;
  // const comment = props.comment;
  const createDate = props.createDate;
  const img_url = props.img_url;

  console.log(title, content, createDate, img_url);

  return (
    <React.Fragment>
      <Grid width="auto" height="500px">
        <Cards>
          <Link to="/Detail">
            <Image size="" border_radius="10px" src={img_url} />
          </Link>
          <Grid padding="16px 16px 5px 16px">
            <Text size="0.975rem" bold>
              {title}
            </Text>
            <Text
              size="0.875rem"
              bold
              margin="0px 0px 1.5rem"
              line_height="1.5"
            >
              {content}
            </Text>
            <Text>{createDate}</Text>
            <Text>짱이에요</Text>
          </Grid>
          <Grid padding="0px 16px" border="1px solid #F1F3F5" is_flex>
            <Text>by Noah Ko</Text>
            <Text>
              <FaHeart />
            </Text>
          </Grid>
        </Cards>
      </Grid>
    </React.Fragment>
  );
};

const Cards = styled.div`
  width: 20rem;
  min-width: 20rem;
  height: 500px;
  ${"" /* border: 1px solid black; */}
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 16px 0px;
  :hover {
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }
  margin: 1.1rem;
`;

export default Post;
