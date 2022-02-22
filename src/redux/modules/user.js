import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Api";
import { useState } from "react";

// actions
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: {
    user_id: "",
    user_pwd: "",
    user_nick: "",
  },
  is_login: false,
};

const loginDB = (loginid, loginpwd) => {
  return function (dispatch, getState, { history }) {
    console.log(loginid, loginpwd);
    instance
      .post("/login", { email: loginid, password: loginpwd })
      .then((res) => {
        alert(res.data.msg);
        // const accessToken = res.data.token; // 콘솔찍어보기
        localStorage.setItem("user_nick", res.data.user_nick);
        localStorage.setItem("is_login", res.data.token);
        dispatch(setUser());
      });
  };
};

//회원가입 API
const signUpDB = (singupid, nickname, signupPwd) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/join", {
        email: singupid,
        password: signupPwd,
        nickname: nickname,
      })
      .then((res) => {
        console.log(res);
        window.alert(res.data.msg);
        // dispatch(setUser()) // 확인
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//아이디 중복 제크 API
const idDuplcheckDB = (signupid) => {
  return function (dispatch, getState, { history }) {
    console.log(signupid);
    instance
      .post("/join/checkid", {
        user_id: signupid,
      })
      .then((res) => {
        console.log(res);
        window.alert(res.data.alert);
      });
  };
};

// 로그아웃
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("is_login");
    localStorage.removeItem("user_nick");
    dispatch(logOut());
    history.replace("/");
    //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
  };
};

// 로그인 체크
// const loginCheckDB = () => {
//   return function (dispatch, getState, { history }) {
//     const token = localStorage.getItem("token");
//     const user_nick = localStorage.getItem("user_nick");

//     if (token) {
//       dispatch(setUser({ user_nick: user_nick, token: token }));
//     }
//   };
// };

//reducer
//produce (immer) 이용하여 불변성 유지
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
  setUser,
  getUser,
  loginDB,
  signUpDB,
  logoutDB,
  idDuplcheckDB,
  // loginCheckDB,
};

export { actionCreators };
