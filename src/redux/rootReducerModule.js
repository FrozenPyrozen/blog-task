import { combineReducers } from 'redux';
import postsReducer from './postList/postsReducer';
import postReducer from './post/postReducer';

export default combineReducers({
  posts: postsReducer,
  currentPost: postReducer,
});
