import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

import PostCard from '../PostCard/PostCardView';
import Loader from '../Loader/Loader';

const PostsListView = ({ posts = [], location, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default PostsListView;
