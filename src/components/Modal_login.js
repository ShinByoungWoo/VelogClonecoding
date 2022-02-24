import React from "react";
import "../shared/modal.css";
import { Input, Text, Grid, Button } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { emailCheck, nicknamecheck, pwdcheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user";
//style
import styled from "styled-components";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
//Page
import ModalSignup from "./Modal_Sign";

const ModalLogin = (props) => {
  const dispatch = useDispatch();
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴.
  const { open, close } = props;

  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem("is_login") ? true : false;
  const user_nick = localStorage.getItem("user_nick");

  const [loginid, setLoginId] = useState("");
  const [loginpwd, setLoginPwd] = useState("");
  const [signupid, setSignupId] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [state, setState] = React.useState(true);

  const changeState = () => {
    setState(false);
  };

  const changeAgainState = () => {
    setState(true);
  };

  React.useEffect(() => {
  }, [state]);

  const login = () => {
    if (loginid === "" || loginpwd === "") {
      window.alert("이메일 혹은 비밀번호를 입력하지 않으셨습니다.");
      return;
    }

    dispatch(userActions.loginDB(loginid, loginpwd));
  };

  const idCheck = () => {
    if (!emailCheck(signupid)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.idDuplcheckDB(signupid));
  };

  const signup = () => {
    if (signupid === "") {
      window.alert("이메일을 입력하여 주세요");
      return;
    }

    if (signupPwd === "") {
      window.alert("비밀번호를 입력하여주세요");
      return;
    }

    if (confirmPwd === "") {
      window.alert("비밀번호를 다시 입력하여 주세요");
      return;
    }

    if (signupPwd !== confirmPwd) {
      window.alert("비밀번호가 일치하지 않습니다.");
    }

    if (nickname === "") {
      window.alert("닉네임을 입력하여 주세요");
      return;
    }

 
    dispatch(userActions.signUpDB(signupid, nickname, signupPwd));
  };

  return (
    <React.Fragment>
      <div className={open ? "openModal modal" : "modal"}>
        {state ? (
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
                  <Grid width="auto" height="auto" is_end>
                    <Button
                      width="auto"
                      height="auto"
                      className="open"
                      _onClick={close}
                      bg="#fff"
                      cursor="pointer"
                    >
                      <GrClose />
                    </Button>
                  </Grid>

                  <Text bold size="21px">
                    로그인
                  </Text>
                  <Text size="16px" margin="0px 0px 0xp 0px">
                    이메일
                  </Text>

                  <Input
                    placeholder="이메일을 입력해주세요"
                    _onChange={(e) => setLoginId(e.target.value)}
                  />

                  <Text size="16px" margin="0px 0px 16xp 0px">
                    비밀번호
                  </Text>

                  <Input
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    _onChange={(e) => setLoginPwd(e.target.value)}
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

                  {/* <Text margin="25px 0px" size="16px" color="#868E96">
                    소셜 계정으로 로그인
                  </Text>
                  <Links>
                    <BsGithub />
                    <BsGoogle />
                    <BsFacebook />
                  </Links> */}
                  <Grid
                    margin="80px 0px 0px 0px"
                    width="auto"
                    height="auto"
                    is_end
                  >
                    <Text margin="0px 10px">아직 회원이 아니신가요?</Text>
                    <Button
                      width="auto"
                      height="10%"
                      bg="#ffffff"
                      _onClick={changeState}
                    >
                      <Text bold margin="0px" color="#20C997">
                        회원가입
                      </Text>
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </main>
          </section>
        ) : (
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
                  <Grid width="auto" height="auto" is_end>
                    <Button
                      width="auto"
                      height="auto"
                      className="open"
                      bg="#fff"
                      cursor="pointer"
                      _onClick={(close, changeAgainState)}
                    >
                      <GrClose />
                    </Button>
                  </Grid>

                  <Text bold size="21px">
                    회원가입
                  </Text>
                  <Text size="16px" margin="0px 0px 0xp 0px">
                    이메일
                  </Text>
                  <Grid width="auto" height="auto" is_flex>
                    <Input
                      placeholder="사용할 이메일을 입력해주세요"
                      _onChange={(e) => setSignupId(e.target.value)}
                    />
                    <Button
                      padding="5px"
                      width="85px"
                      height="43px"
                      bg="#20C997"
                      margin="0px 5px"
                      display="block"
                      borderRadius="5px"
                      _onClick={idCheck}
                    >
                      중복체크
                    </Button>
                  </Grid>

                  <Text size="16px" margin="0px 0px 16xp 0px">
                    비밀번호
                  </Text>

                  <Input
                    placeholder="사용할 비밀번호를 입력해주세요"
                    type="password"
                    _onChange={(e) => setSignupPwd(e.target.value)}
                  />

                  <Text size="16px" margin="0px 0px 16xp 0px">
                    비밀번호
                  </Text>

                  <Input
                    placeholder="비밀번호를 다시 입력해주세요"
                    type="password"
                    _onChange={(e) => setConfirmPwd(e.target.value)}
                  />

                  <Text size="16px" margin="0px 0px 0xp 0px">
                    닉네임
                  </Text>

                  <Input
                    placeholder="닉네임을 입력해주세요"
                    _onChange={(e) => setNickname(e.target.value)}
                  />

                  <Button
                    padding="0px"
                    width="150px"
                    height="48px"
                    bg="#20C997"
                    margin="22.22px auto"
                    display="block"
                    borderRadius="5px"
                    _onClick={signup}
                  >
                    회원가입
                  </Button>
                </Grid>
              </div>
            </main>
          </section>
        )}
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
  margin: 0px 20px;
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

export default ModalLogin;
