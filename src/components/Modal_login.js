import React from "react";
import "../shared/modal.css";
import { Input, Text, Grid, Button } from "../elements/Index";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actionCreators as userActions } from "../redux/modules/user";
//style
import styled from "styled-components";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Modal_login = (props) => {
  const dispatch = useDispatch();
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴.
  const { open, close, header } = props;

  // const is_login = useSelector((state) => state.user.is_login);
  // const is_local = localStorage.getItem("is_login") ? true : false;
  // const user_nick = localStorage.getItem("user_nick");

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const { onClickModal } = props;

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("이메일 혹은 비밀번호를 입력하지 않으셨습니다.");
      return;
    }

    dispatch(userActions.loginDB(id, pwd));
  };

  return (
    <React.Fragment>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <main>
              <div className="leftside">
                <Img
                  src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                  alt="velog 캐릭터"
                />
                <Text
                  size="28px"
                  margin="1.5rem 0px 0px 0px"
                  color="#495057"
                  bold
                  center
                >
                  환영합니다
                </Text>
              </div>
              <div className="rightside">
                <Grid padding="0px 0px 0px 0px">
                  <Button
                    width="auto"
                    height="auto"
                    className="open"
                    _onClick={close}
                    bg="#fff"
                  >
                    <GrClose />
                  </Button>
                  <Text bold size="21px">
                    로그인
                  </Text>
                  <Text size="16px" margin="0px 0px 0xp 0px">
                    이메일
                  </Text>

                  <Input
                    placeholder="이메일을 입력해주세요"
                    _onChange={(e) => setId(e.target.value)}
                  />

                  <Text size="16px" margin="0px 0px 16xp 0px">
                    비밀번호
                  </Text>

                  <Input
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    _onChange={(e) => setPwd(e.target.value)}
                  />

                  <Button
                    padding="0px"
                    width="150px"
                    height="48px"
                    bg="#20C997"
                    margin="22.22px auto"
                    display="block"
                    _onClick={login}
                  >
                    로그인
                  </Button>

                  <Text margin="5px 0px" size="16px" color="#868E96">
                    소셜 계정으로 로그인
                  </Text>
                  <Links>
                    <BsGithub />
                    <BsGoogle />
                    <BsFacebook />
                  </Links>
                </Grid>

                <Grid>
                  <Text>아직 회원이 아니신가요?</Text>
                  <SignBtn onClick={onClickModal}>회원가입</SignBtn>
                </Grid>
              </div>
            </main>
          </section>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const ImgGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  margin: 0px;
  padding: 32px;
`;

const Img = styled.img`
  width: 152px;
  margin: 0px;
`;

const InputGrid = styled.div`
  display: flex;
  /* flex: 1 1 0%; */
  flex-direction: column;
  background-color: #ffffff;
  padding: 0px 32px;
  /* margin-top: 44px; */
  text-align: left;
`;

const LoginInput = styled.input`
  width: 100%;
  height: auto;
`;

const Links = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: space-between;
`;

const SignBtn = styled.span`
  font-weight: bold;
  color: rgb(18, 184, 134);
  margin: 12px;
  font-size: 15px;
  align-self: flex-end;
  cursor: pointer;
`;

const SpanTxt = styled.span`
  margin: 12px;
  font-size: 15px;
  align-self: flex-end;
`;

export default Modal_login;
