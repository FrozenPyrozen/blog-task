const getItem = state => state.currentPost.item;
const getPostId = state => state.currentPost.item.id;
const getComment = state => state.currentPost.comment;

export default { getItem, getPostId, getComment };
