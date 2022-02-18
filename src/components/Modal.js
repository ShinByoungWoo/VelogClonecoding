import React from "react";
import "../shared/modal.css";
import Input from "../elements/Input";

const Modal = (props) => {
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴.
  const { open, close, header } = props;

  return (
    <React.Fragment>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="open" onClick={close}>
                닫기
              </button>
            </header>
            <main>
              <div className="leftside">
                <h2>환영합니다</h2>
                <img src="https://velopert.com/wp-content/uploads/2018/09/velog-950x500.png" />
              </div>
              <div className="rightside">
                <Input label="아이디" placeholder="아이디를 입력하여 주세요" />
                <Input
                  label="아이디"
                  placeholder="비밀번호를 입력하여 주세요"
                />
                <button>로그인하기</button>
              </div>
            </main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Modal;
