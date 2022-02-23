import React, { useState } from "react";
// import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as postActions } from "../redux/modules/post";
import instance from "../shared/Api";
import axios from "axios";

//style
import styled from "styled-components";
import { Grid, Image } from "../elements/Index";

//toast
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Write = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  //각 폼안의 상태
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const changeImage = (e) => {
    setImage(e.target.value);
  };

  //프리뷰 조지기
  const preview = useSelector((state) => state.post.preview);
  console.log(preview);

  //값 추가하기
  const addPost = () => {
    dispatch(postActions.addPostDB(title, content, preview));
  };

  //포스트 ID값 가져오기 (id값 url 미설정)
  const post_id = props.match.params.post_id;
  console.log(post_id);

  //포스트DB에 저장된 리스트 가져오기
  const post_list = useSelector((state) => state.post.post_list);
  console.log(post_list);

  //아이디 값이 있을 때 수정모드
  const is_edit = post_id ? true : false;
  console.log(is_edit);

  //값 수정하기 미완2022.2.23 02:51
  React.useEffect(() => {
    dispatch(postActions.getOnePost(post_id));

    if (is_edit) {
      setTitle(post_list.title);
    }
  }, []);

  //Ref
  const fileInput = React.useRef();

  //폼데이터 및 파일리더
  const selectFile = async (e) => {
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append("files", file);
    console.log(formData)
    
    await axios({
      method: "post",
      url: "/post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러예요! :)
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠(내용물)입니다!
      dispatch(postActions.setPreview(reader.result));
      console.log(reader.result);
    };
  };


  return (
    <React.Fragment>
      <Grid>
        <LeftArea>
          <TitleAreas
            border="none"
            placeholder="제목을 입력하세요"
            onChange={changeTitle}
          />
          <TitleLine />

          <form action="/post" method="POST" enctype="multipart/form-data" id="form">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={selectFile}
              ref={fileInput}
            />
            <Image
              margin="10px 0px 0px 0px"
              shape="rectangle"
              width="50%"
              src={preview ? preview : ""}
            >
              사진추가하기
            </Image>
          </form>

          <MarkDownArea>
            <ContentArea
              placeholder="당신의 이야기를 적어보세요..."
              onChange={changeContent}
            />
          </MarkDownArea>
          <FooterArea>
            <div>
              <CancleBtn>나가기</CancleBtn>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SaveBtn>임시저장</SaveBtn>
              <AddBtn onClick={addPost}>출간하기</AddBtn>
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
  width: 100vw;
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
