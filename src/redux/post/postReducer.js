import { combineReducers } from 'redux';
import types from './postActionTypes';

function postReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_COMMENT_SUCCESS:
      return { ...state, comments: [...state.comments, payload] };

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
    case types.ADD_COMMENT_SUCCESS:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  item: postReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
