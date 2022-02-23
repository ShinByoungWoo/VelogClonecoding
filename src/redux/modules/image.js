import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions
const UPLOADING = "UPLOADING";
const SET_PREVIEW = "SET_PREVIEW";

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initial state
const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

//middleware

// reducer
export default handleActions(
  {
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  // uploadImage,
  //   uploadImageFB,
  setPreview,
  uploading,
};

export { actionCreators };
