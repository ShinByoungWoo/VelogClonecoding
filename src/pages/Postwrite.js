import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as postActions } from "../redux/modules/post";
import instance from "../shared/Api";

//style
import styled from "styled-components";
import { Grid, Input, Image, Text } from "../elements/Index";

const Write = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  // const preview = useSelector((state) => state.image.preview);

  // //추가하기
  const postAdd = () => {
    if (title === "" || content === "") {
      window.alert("제목과 내용을 모두 입력하여 주세요");
      return;
    }
    console.log(title, content, img);

    dispatch(postActions.addPostDB(title, content, img));
  };

  return (
    <React.Fragment>
      <Grid bg="#ff6f60" flex width="100%" height="100vh">
        <LeftArea>
          <Grid padding="2rem 3rem 0rem 3rem">
            <TitleAreas
              border="none"
              placeholder="제목을 입력하세요"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Grid is_flex width="auto" height="auto">
              <Text margin="0px" bold center>
                이미지 URL
              </Text>

              <Input
                placeholder="이미지 주소를 넣어주세요"
                _onChange={(e) => setImg(e.target.value)}
              />
            </Grid>
            <ContentArea
              placeholder="당신의 이야기를 들려주세요"
              onChange={(e) => setContent(e.target.value)}
            ></ContentArea>

            <FooterArea>
              <div>
                <CancleBtn>나가기</CancleBtn>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SaveBtn>임시저장</SaveBtn>
                <AddBtn onClick={postAdd}>출간하기</AddBtn>
              </div>
            </FooterArea>
          </Grid>
        </LeftArea>

        {/* 오른쪽 */}
        <RightArea>
          {/* <Image
            margin="10px 0px 0px 0px"
            shape="rectangle"
            width="50%"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          /> */}
        </RightArea>
      </Grid>
    </React.Fragment>
  );
};

const LeftArea = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  /* -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  } */
`;

const TitleAreas = styled.textarea`
  background: transparent;
  display: block;
  padding: 0px;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  height: 80px;
  outline: none;
  border: none;
  font-weight: bold;
  color: black;
  background-color: #ffffff;
  margin: 0px 0px 10px 0px;
`;

const ContentArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding: 20px 0px 0px 0px;
  width: 100%;
  height: 73.5%;
  font-size: 20px;
  margin-top: 30px;
  ::placeholder {
    font-style: italic;
  }
  background-color: #ffffff;
`;

const FooterArea = styled.div`
  /* z-index: 10; */
  ${"" /* position: fixed; */}
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 0px;
  margin: 0px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;

const AddBtn = styled.button`
  border: none;
  background-color: #12b886;
  color: white;
  justify-content: center;
  font-weight: bold;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  margin: 0px 0px 0px 15px;

  &:hover {
    background-color: #e6e6e6;
    color: #12b886;
  }
`;

const SaveBtn = styled.button`
  border: none;
  background-color: #e6e6e6;
  color: white;
  justify-content: center;
  font-weight: bold;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #adb5bd;
    color: #e6e6e6;
  }
`;

const CancleBtn = styled.button`
  border: none;
  background-color: #e6e6e6;
  color: black;
  justify-content: center;
  font-weight: bold;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  height: 50px;
  width: 65px;

  &:hover {
    background-color: #12b886;
    color: #e6e6e6;
  }
`;
// 오른쪽 화면 css
const RightArea = styled.div`
  width: 50vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #fbfdfc;
`;

export default Write;
