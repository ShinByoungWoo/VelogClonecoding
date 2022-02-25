import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Api";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";
const GET_ONE_POST = "GET_ONE_POST";

const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post_index) => ({ post_index }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const getOnePost = createAction(GET_ONE_POST, (post) => ({ post }));

const initialState = {
  list: [],
  detail: null,
}; //받아오는 값이거나 null값.

// middleware

//추가하기
const addPostDB = (title, content, img) => {
  return function (dispatch, getState, { history }) {
    const is_local = localStorage.getItem("is_login");
    const _post = {
      title: title,
      content: content,
      img_url: img,
    };
    console.log(title, content, img);
    let post = { ..._post };
    console.log(post);
    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청합니다.
    instance
      .post(
        "/post", // 미리 약속한 주소
        {
          title: title,
          content: content,
          img_url: img,
        }, // 서버가 필요로 하는 데이터를 넘겨주고,
        // (instance.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${is_local}`)
        { headers: { authorization: `Bearer ${is_local}` } }
      )
      .then((res) => {
        window.alert(res.data.msg);
        dispatch(addPost(post));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//불러오기
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    const is_local = localStorage.getItem("is_login");
    instance
      .get("/post", {}, { headers: { authorization: `Bearer ${is_local}` } })
      .then(function (response) {
        console.log(response);
        const postDB = response.data.posts;

        console.log(postDB[0].post.title);
        let post_list = [];
        for (let i = 0; i < postDB.length; i++) {
          let list = {
            title: postDB[i].post.title,
            content: postDB[i].post.content,
            createDate: postDB[i].post.createdAt,
            img_url: postDB[i].post.img_url,
            post_id: postDB[i].post.post_id,
            nickName: postDB[i].nickName,
          };
          post_list.push(list);
          console.log(post_list);
        }

        dispatch(getPost(post_list));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//삭제하기
const deletePostFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {
    const _post_idx = getState().post.list.findIndex(
      (p) => p.post_id === post_id
    );
    window.alert("삭제되었습니다");
    instance
      .delete(`/api/getpost/delete/${post_id}`, {})
      .then(function (response) {
        dispatch(deletePost(_post_idx));
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
};

//수정하기
const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    window.alert("수정되었습니다");
    instance
      .patch(`/api/getpost/modify/${post_id}`, {
        title: post.title,
        location: post.location,
        comment: post.comment,
      })
      .then(function (response) {
        dispatch(editPost(post_id, { ...post }));
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getOnePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/post/${post_id}`, {})
      .then(function (response) {
        const post = response.data;
        console.log(post);
        console.log("thunk");
        dispatch(getOnePost(post));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let deleted = draft.list.filter((e, i) => {
          return parseInt(action.payload._post_idx) !== i;
        });
        draft.list = deleted;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.post_id === action.payload.post_id
        );
        draft.list[idx] = {
          ...draft.list[idx],
          ...action.payload.post,
          ...action.payload.like_count,
        };
      }),
    [GET_ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.detail = action.payload.post;
        console.log(draft.detail);
      }),
  },
  initialState
);

const actionCreators = {
  getPost,
  addPost,
  getPostDB,
  addPostDB,
  deletePostFB,
  deletePost,
  editPostFB,
  editPost,
  getOnePostDB,
  getOnePost,
};
export { actionCreators };
