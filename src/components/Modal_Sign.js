import React from "react";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//style
import styled, { keyframes } from "styled-components";
import { Grid, Button, Text, Input } from "../elements/Index";
import { GrClose } from "react-icons/gr";

const ModalSignup = (props) => {
  const dispatch = useDispatch();

  const { open, close } = props;

  const [Id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");

  const { onClickModal } = props;

  const signup = () => {
    dispatch(userActions.signUpDB(Id, nickname, pwd, confirmPwd));
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
                  <Grid width="auto" height="auto" is_end>
                    <Button
                      width="auto"
                      height="auto"
                      className="open"
                      bg="#fff"
                      cursor="pointer"
                      _onClick={close}
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
                      _onChange={(e) => setId(e.target.value)}
                    />
                    <Button
                      padding="5px"
                      width="85px"
                      height="43px"
                      bg="#20C997"
                      margin="0px 5px"
                      display="block"
                      borderRadius="5px"
                      // _onClick={login}
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
                    _onChange={(e) => setPwd(e.target.value)}
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
        ) : null}
      </div>
    </React.Fragment>
  );
};

// 추가

const Wrapper = styled.div`
  display: flex;
  width: 606px;
  height: 480px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.9);

  // 임시
  position: fixed;
  top: 230px;
  right: 658px;
`;

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
  padding: 0px 35px 0px 35px;
  /* margin-top: 44px; */
  text-align: left;
`;

const Duplication = styled.input`
  width: 252px;
  height: 32px;
`;

const DuplicationBtn = styled.button`
  padding: 0px;
  width: 60px;
  height: 38px;
  background-color: #20c997;
  border: none;
  display: inline-block;
  cursor: pointer;
`;

const LoginInput = styled.input`
  width: 310px;
  height: 32px;
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
`;

const SpanTxt = styled.span`
  margin: 12px;
  font-size: 15px;
  align-self: flex-end;
`;

// const boxFade = keyframes`
//   0% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `
// const StyledWrapper = styled.div`
//   width: 100px;
//   height: 100px;
//   background: #00bfb2;
//   ${(props) => props.active &&`
//    animation: ${boxFade} 2s 1s infinite linear alternate;
//   `}
// `;
export default ModalSignup;
