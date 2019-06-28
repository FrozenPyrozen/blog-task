import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

import PostCard from '../PostCard/PostCardView';

const PostsListView = ({ posts = [], location }) => {
  return (
    <div>
      <ul>
        {posts.length > 0 ? (
          posts.map(post => (
            <li key={post.id}>
              <Link
                to={{
                  pathname: `${routes.posts}${post.id}`,
                  state: { from: location },
                }}
              >
                <PostCard {...post} />
              </Link>
            </li>
          ))
        ) : (
          <div>No posts here{'('}</div>
        )}
      </ul>
    </div>
  );
};

export default PostsListView;
