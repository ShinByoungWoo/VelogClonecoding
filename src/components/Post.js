import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Text, Image, Button } from "../elements/Index";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Post = (props) => {
  const dispatch = useDispatch();

  const title = props.title;
  const nickname = props.nickname;
  const content = props.content;
  const comment = props.comment; //.length
  const createDate = props.createdAt;
  const img_url = props.img;

  return (
    <React.Fragment>
      <Grid width="auto">
        <Cards>
          <Link to="/Detail">
            <Image
              size="cover"
              border_radius="10px"
              src="https://media.vlpt.us/images/seongkyun/post/0226f2c5-3af3-4505-8311-57e06c5b71c5/31890968_1513214132122987_309876006301204480_n.jpg"
            />
          </Link>
          <Grid padding="16px 16px 5px 16px">
            <Text size="0.975rem" bold>
              신입 프론트엔드 개발자가 되려고 한다면
            </Text>
            <Text
              size="0.875rem"
              bold
              margin="0px 0px 1.5rem"
              line_height="1.5"
            >
              신입 프론트엔드 개발자가 되려고 한다면 신입 프론트엔드 개발자가
              되려고 한다면 신입 프론트엔드 개발자가 되려고 한다면 신입
              프론트엔드 개발자가 되려고 한다면
            </Text>
            <Text>2021.02.20</Text>
            <Text>15개의 댓글</Text>
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
  height: auto;
  ${"" /* border: 1px solid black; */}
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 16px 0px;
  :hover {
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  }
  margin: 1.1rem;
`;

export default Post;

// <React.Fragment>
// <Grid width="auto">
//   <Cards>
//     <Link to="/Detail">
//       <Image size="cover" border_radius="10px" src={img_url} />
//     </Link>
//     <Grid padding="16px 16px 5px 16px">
//       <Text size="0.975rem" bold>
//         {title}
//       </Text>
//       <Text
//         size="0.875rem"
//         bold
//         margin="0px 0px 1.5rem"
//         line_height="1.5"
//       >
//         {content}
//       </Text>
//       <Text>{createDate}</Text>
//       <Text>`${comment.length}개의 댓글`</Text>
//     </Grid>
//     <Grid padding="0px 16px" border="1px solid #F1F3F5" is_flex>
//       <Text>`by ${nickname}`</Text>
//       <Text>
//         <FaHeart />
//       </Text>
//     </Grid>
//   </Cards>
// </Grid>
// </React.Fragment>
