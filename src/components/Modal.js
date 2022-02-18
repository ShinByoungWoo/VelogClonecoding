import React from "react";
import "../shared/modal.css";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/Index";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import {GrClose} from "react-icons/gr"

import { history } from "../redux/configureStore";

const Modal = (props) => {
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴.
  const { open, close, header } = props;

  return (
    <React.Fragment>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            {/* <header>
              {header}
              <button className="open" onClick={close}>
                X
              </button>
            </header> */}

            {/* 로그인 화면 오른쪽 */}
            <ImgGrid>
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
            </ImgGrid>

            {/* 로그인 화면 왼쪽  */}
            <InputGrid>
              <button className="open" onClick={close}>
              <GrClose/>
              </button>
              <Grid>
                <Text bold size="21px">
                  로그인
                </Text>
                <Text size="16px" margin="0px 0px 0xp 0px">
                  이메일
                </Text>

                <LoginInput name="email" placeholder="메일을 입력해주세요" />

                <Text size="16px" margin="0px 0px 16xp 0px">
                  비밀번호
                </Text>
                <LoginInput
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                />

                <Button
                  padding="0px"
                  width="150px"
                  height="48px"
                  bg="#20C997"
                  margin="22.22px auto"
                  display="block"
                  //   _onClick={}
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

              <Grid is_end>
                <SpanTxt color="black">아직 회원이 아니신가요?</SpanTxt>

                <SignBtn
                  onClick={() => {
                    history.push("/join");
                  }}
                >
                  회원가입
                </SignBtn>
              </Grid>
            </InputGrid>
          </section>
        ) : null}
      </div>
    </React.Fragment>
  );
};

// const Wrapper = styled.div`
//   display: flex;
//   width: 606px;
//   height: 480px;
//   box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.9);

// 임시
//   position: fixed;
//   top: 30px;
//   right: 500px;s
// `;

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
  padding: 32px;
  /* margin-top: 44px; */
  text-align: left;
`;

const LoginInput = styled.input`
  width: 294px;
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

export default Modal;
