import React from "react";
import { Grid, Image, Text } from "../elements/Index";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const PostD = () => {
  return (
    <React.Fragment>
      <Grid margin="5.5rem auto 0px auto" center width="40rem">
        <Text size="48px" bold line_height="1.5">
          안녕하세요, 프론트엔드 신입에 지원합니다.
        </Text>
        <Grid is flex>
          <Text margin="5px ">Noah Ko</Text>
          <Text margin="5px ">2022년 2월 20일</Text>
        </Grid>
        <Image
          src="https://media.vlpt.us/images/heyiminhye/post/986bbad3-1ca5-4628-8a2e-1498bd0acbb2/hr-process-gd20a0046a_1280.png"
          size="20"
          border_radisu="10px"
        />
        <Text size="18px" line_height="1.5">
          개발자가 되려고 결심한 이유 그리고 신입프론트 개발자로 취업을
          준비하면서 면접에서 받은 질문과 답변을 총정리해보려고 합니다. 사실
          개발자로 전직을 한다는 것이 말처럼 쉬운것은 또 아니기 때문에 많은
          준비가 필요하다고 봅니다.
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default PostD;