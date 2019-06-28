import React from 'react';

import AddCommentContainer from '../AddComment';

const PostView = ({ handleGoBack, post }) => {
  const { author, body, comments = [], title } = post;
  return (
    <>
      <h2>{title}</h2>
      <span>{author}</span>
      <p>{body}</p>
      <span>Comments</span>
      {comments.length === 0 ? (
        <div>There is no comments here, but you can be first!</div>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <h3>Comment id: {comment.id}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
      <AddCommentContainer />
      <button type="button" onClick={handleGoBack}>
        Back to posts
      </button>
    </>
  );
};

export default PostView;
