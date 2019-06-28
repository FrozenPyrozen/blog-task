import * as api from '../../services/api';
import actions from './postActions';

const fetchItem = id => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const post = await api.getPostById(id);

    dispatch(actions.fetchSuccess(post));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const addComment = comment => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const res = await api.addComment(comment);
    console.log(res);

    dispatch(actions.addCommentSuccess(res));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchItem, addComment };
