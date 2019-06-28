import React from 'react';

const AddCommentView = ({ onSubmit, onChange }) => {
  return (
    <div>
      AddComment
      <form onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="10"
          onChange={onChange}
        ></textarea>
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default AddCommentView;
