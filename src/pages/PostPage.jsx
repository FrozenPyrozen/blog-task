import React from 'react';
import PostContainer from '../components/Post';

const PostPage = ({ match, location, history }) => (
  <div>
    <PostContainer id={match.params.id} location={location} history={history} />
  </div>
);

export default PostPage;
