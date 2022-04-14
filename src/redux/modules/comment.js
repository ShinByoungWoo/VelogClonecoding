import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import "moment";
import moment from "moment";
import instance from "../../shared/Api";

const GET_ONE_COMMENT = "GET_ONE_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const LOADING = "LOADING";

const getOneComment = createAction(
  GET_ONE_COMMENT,
  (comment_list, post_id) => ({ comment_list, post_id })
);
const addComment = createAction(ADD_COMMENT, (content, post_id) => ({
  content,
  post_id,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
};

const getOneCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/post/${post_id}/comment/`)
      .then(function (response) {
        console.log(response)
        const comments_list = response.data.comment_list;
        dispatch(getOneComment(comments_list, post_id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//댓글추가
const addCommentFB = (content, post_id) => {
  return function (dispatch, getState, { history }) {
    const is_local = localStorage.getItem("is_login");
    const _comment = {
      content: content,
    };
    const comment_list = { ..._comment };
    instance
      .post(
        `/post/${post_id}/comment`,
        {
          content: content,
        },
        (instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${is_local}`)
      )
      .then((response) => {
        console.log(response.data);
        dispatch(addComment(comment_list, post_id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id].unshift(action.payload.comment_list);
        console.log(draft.details[action.payload.post_id]);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),

    [GET_ONE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  addCommentFB,
  getOneComment,
  getOneCommentDB,
};

export { actionCreators };
