import React from 'react';
import PostListContainer from '../components/PostsList';

const PostListPage = ({ match, location, history }) => (
  <div>
    <PostListContainer
      id={match.params.id}
      location={location}
      history={history}
    />
  </div>
);

export default PostListPage;
