import { combineReducers } from 'redux';
import types from './postActionTypes';

/*y: "lorem fjfjfj slddk sj sjd fkk kfhghgg mgmgngjdjdjd jddj", id: 1, comments: Array(9)}
author: "Max"
body: "lorem fjfjfj slddk sj sjd fkk kfhghgg mgmgngjdjdjd jddj"
comments: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
id: 1
title: "Hell" */

function postReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_COMMENT_SUCCESS:
      const { comments } = state;

      return { ...state, comments: [...comments, payload] };

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
