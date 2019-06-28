import * as api from '../../services/api';
import actions from './postsActions';

const fetchItems = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const posts = await api.getAllPosts();

    dispatch(actions.fetchSuccess(posts));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export default { fetchItems };
