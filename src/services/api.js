import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';
const POSTS_PATH = '/posts';
const COMMENTS_PATH = '/comments';

/*
 * Use axios for http requests
 *
 * More information: https://github.com/axios/axios
 */

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${POSTS_PATH}`);

    return res.data;
  } catch (error) {
    console.log(error);
    alert(error);
    return error;
  }
};

export const getPostById = async id => {
  try {
    const res = await axios.get(`${POSTS_PATH}/${id}/?_embed=comments`);

    return res.data;
  } catch (error) {
    console.log(error);
    alert(error);
    return error;
  }
};

export const addComment = async comment => {
  try {
    const res = await axios.post(`${COMMENTS_PATH}`, comment);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error);
    return error;
  }
};
