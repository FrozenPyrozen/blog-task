import { combineReducers } from 'redux';
import postReducer from './postList/postReducer';

export default combineReducers({
  posts: postReducer,
});
