import types from './postsActionTypes';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = posts => ({
  type: types.FETCH_SUCCESS,
  payload: posts,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const sortPostByLast = isSorted => ({
  type: types.SORT_POST_BY_LAST,
  payload: isSorted,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  sortPostByLast,
};
