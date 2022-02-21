import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "./cookie";

const instance = axios.create({
  // baseURL: "https://6be3b6c9-875e-4de2-ad00-299e2a32a238.mock.pstmn.io" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
  // baseURL: "http://3.34.142.133:4000",
});

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

// const is_cookie = getCookie("is_login") ? true : false
// const getcookie = getCookie("is_login")
// console.log(is_cookie)
// if(is_cookie) {
// 	instance.defaults.headers.common["Authorization"] = `Bearer ${getcookie}`

export default instance;
