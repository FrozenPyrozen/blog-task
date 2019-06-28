import React, { Component } from 'react';

import { connect } from 'react-redux';

import { postSelectors, postOperations } from '../../redux/post';

import AddCommentView from './AddCommentView';

const INITIAL_STATE = {
  text: '',
};

class AddCommentContainer extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = async evt => {
    evt.preventDefault();

    const { text } = this.state;
    const { fetchComment, postId } = this.props;

    if (!text) {
      return;
    }

    const comment = {
      body: text.trim(),
      postId,
    };

    fetchComment(comment);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <AddCommentView
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  postId: postSelectors.getPostId(state),
  writtenComment: postSelectors.getComment(state),
});

const mapDispatchToProps = {
  fetchComment: postOperations.addComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCommentContainer);
