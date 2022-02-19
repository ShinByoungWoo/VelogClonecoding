import React from "react";
import styled from "styled-components";

import { Grid } from "../elements/Index";

const Write = (props) => {
  return (
    <React.Fragment>
      <Grid flex>
        <LeftArea>
          <TitleAreas border="none" placeholder="제목을 입력하세요" />
          <TitleLine />
          <TagArea placeholder="태그를 입력하세요" />

          <div>텍스트 에디터 구역</div>

          <MarkDownArea>
            <ContentArea placeholder="당신의 이야기를 적어보세요..." />
          </MarkDownArea>
          <FooterArea>
            <div>
              <CancleBtn>나가기</CancleBtn>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SaveBtn>임시저장</SaveBtn>
              <AddBtn>출간하기</AddBtn>
            </div>
          </FooterArea>
        </LeftArea>

        {/* 오른쪽 */}
        <RightArea></RightArea>
      </Grid>
    </React.Fragment>
  );
};

const LeftArea = styled.div`
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100vw;
  height: 100vh;
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
`;

const TagArea = styled.textarea`
  background: transparent;
  display: block;
  outline: none;
  border: none;
  padding: 0px;
  resize: none;
  cursor: text;
  font-size: 1rem;
`;

const TitleLine = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const MarkDownArea = styled.div`
  margin-bottom: -30px;
  margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none;
  position: relative;
`;

const ContentArea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding: 0px;
  width: 100%;
  height: 100%;
  font-size: 24px;
  margin-top: 30px;
  ::placeholder {
    font-style: italic;
  }
`;

const FooterArea = styled.div`
  /* z-index: 10; */
  position: fixed;
  left: 0px;
  bottom: 0;
  width: 48vw;
  height: 50px;
  padding: 10px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);
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
  margin: 0px 10px;

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
  padding: 48px;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #fbfdfc;
`;

export default Write;
