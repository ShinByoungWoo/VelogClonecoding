import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as postActions } from "../redux/modules/post";
import instance from "../shared/Api";

//style
import styled from "styled-components";
import { Grid } from "../elements/Index";

//toast
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Write = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  // const [tag, setTag] = useState("");
  // const [content, setContent] = useState("");

  // const publish = () => {
  //   if (title === "" || content === "") {
  //     window.alert("내용을 모두 입력하여 주세요");
  //     console.log(editorRef.current.getInstance().getData());
  //     return;
  //   }

  //   dispatch(userActions.addPostDB(title, content));
  // };

  //에디터 부분
  const editorRef = React.useRef();

  // 콘텐츠 값 가져와짐!
  // const contents = editorRef.current.getInstance().preview.el.innerText;
  // console.log(contents)

  // console.log(title);

  // const context = editorRef.current.getInstance().getHTML();
  // console.log(context);

  //텍스트 에디터 image url 줄이는 방법
  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (image, callback) => {
          (async () => {
            let is_local = localStorage.getItem("is_login");
            let formData = new FormData();
            let baseUrl = "http://3.34.178.85";
            formData.append("image", image);
            console.log(image);

            // instance.defaults.withCredentials = true; //국ㄹ
            const { data: url } = await instance.post(
              `${baseUrl}/post`,
              formData,
              {
                header: {
                  "content-type": "multipart/formdata",
                  Authorization: `Bearer ${is_local}`,
                },
              }
            );
            console.log(url);
            callback(url, "image");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  // //추가하기
  const postAdd = () => {
    const contents = editorRef.current.getInstance().getMarkdown();
    console.log(title, contents);
    if (title === "" || contents === "") {
      window.alert("제목과 내용을 모두 입력하여 주세요");
      console.log(editorRef.current.getInstance().preview.el.innerText);
      return;
    }

    dispatch(postActions.addPostDB(title, contents));
  };

  return (
    <React.Fragment>
      <Grid flex>
        <LeftArea>
          <TitleAreas
            border="none"
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TitleLine />
          <TagArea
            placeholder="태그를 입력하세요"
            // onChange={(e) => setTag(e.target.value)}
          />

          <Editor //에디터
            placeholder="당신의 이야기를 적어보세요..."
            previewStyle="vertical"
            height="100vh"
            width="100vw"
            initialEditType="markdown"
            initialValue=""
            ref={editorRef}
          />

          <FooterArea>
            <div>
              <CancleBtn>나가기</CancleBtn>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SaveBtn>임시저장</SaveBtn>
              <AddBtn onClick={postAdd}>출간하기</AddBtn>
            </div>
          </FooterArea>
        </LeftArea>

        {/* 오른쪽 */}
        {/* <RightArea></RightArea> */}
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
  ${"" /* position: fixed; */}
  left: 0px;
  bottom: 0;
  width: 46vw;
  height: 50px;
  padding: 10px;
  margin: 0px;
  display: flex;
  background-color: white;
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
