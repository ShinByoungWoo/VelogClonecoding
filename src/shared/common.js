export const emailCheck = (email) => {
  let _regId =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return _regId.test(email);
};

export const nicknamecheck = (nick) => {
  let _regNick = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){1,10}$/;

  return _regNick.test(nick);
};

export const pwdcheck = (pwd) => {
  let _regPwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#*-_])[A-Za-z\d!@#*-_]{8,16}$/;

  return _regPwd.test(pwd);
};
