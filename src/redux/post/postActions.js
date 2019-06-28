import types from './postActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = post => {
  return {
    type: types.FETCH_SUCCESS,
    payload: post,
  };
};

const addCommentSuccess = comment => ({
  type: types.ADD_COMMENT_SUCCESS,
  payload: comment,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  addCommentSuccess,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
