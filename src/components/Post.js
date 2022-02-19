import React from "react";
import { Link } from "react-router-dom";
import { Grid, Text, Image, Button } from "../elements/Index";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const Post = () => {
  return (
    <React.Fragment>
      <Grid is_flex flex_wrap margin="auto" is_center padding="0px 5rem">
        <Cards>
          <Link to="/login">
            <Image
              src="https://media.vlpt.us/images/heyiminhye/post/986bbad3-1ca5-4628-8a2e-1498bd0acbb2/hr-process-gd20a0046a_1280.png"
              border_radius="10px"
            />
          </Link>
          <Grid padding="16px 16px 5px 16px">
            <Text size="0.975rem" bold>
              안녕하세요, 저는 프론트엔드 신입에 지원...
            </Text>
            <Text
              size="0.875rem"
              bold
              margin="0px 0px 1.5rem"
              line_height="1.5"
            >
              {" "}
              개발자가 되려고 결심한 이유 그리고 신입프론트 개발자로 취업을
              준비하면서 면접에서 받은 질문과 답변을 총정리
            </Text>
            <Text>2021.02.19 / 16개의 댓글</Text>
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
  margin: 2rem;
`;

export default Post;
