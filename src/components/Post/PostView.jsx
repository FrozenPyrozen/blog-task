import React from 'react';

const PostView = ({ handleGoBack }) => {
  return (
    <>
      <h1>PostView</h1>
      <button type="button" onClick={handleGoBack}>
        Back to posts
      </button>
    </>
  );
};

export default PostView;
