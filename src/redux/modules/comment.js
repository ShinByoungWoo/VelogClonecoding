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
const addComment = createAction(ADD_COMMENT, (comment_list, post_id) => ({
  comment_list,
  post_id,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  details: {},
};

const getOneCommentFB = (post_id) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/comment/get/${post_id}`, {})
      .then(function (response) {
        const comments_list = response.data.comment_list;
        dispatch(getOneComment(comments_list, post_id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const addCommentFB = (user_comment, user_nick, post_id) => {
  return function (dispatch, getState, { history }) {
    const is_local = localStorage.getItem("is_login");
    const _comment = {
      user_nick: user_nick,
      user_comment: user_comment,
    };
    const comment_list = { ..._comment };
    instance
      .post(
        `/api/comment/save/${post_id}`,
        {
          user_nick: user_nick,
          user_comment: user_comment,
        },
        (instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${is_local}`)
      )
      .then((response) => {
        console.log(response.data.success);
        dispatch(addComment(comment_list, post_id));
        window.location.reload();
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
        // draft.list[action.payload.post_id].push(action.payload.comment_list);
        // console.log(draft.details[action.payload.post_id])
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
    [GET_ONE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.details[action.payload.post_id] = action.payload.comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  addCommentFB,
  getOneComment,
  getOneCommentFB,
};

export { actionCreators };
