const getItems = state => state.posts.items;
const getIsLoading = state => state.posts.isLoading;
const getError = state => state.posts.error;

export default { getItems, getIsLoading, getError };
