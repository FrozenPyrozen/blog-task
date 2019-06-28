import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postSelectors, postOperations } from '../../redux/post';
import PostView from './PostView';

class PostContainer extends Component {
  componentDidMount() {
    const { id, fetchPost } = this.props;

    fetchPost(id);
  }

  handleGoBack = () => {
    const { history } = this.props;

    return history.push({
      pathname: '/posts',
    });
  };

  render() {
    return (
      <div>
        <PostView handleGoBack={this.handleGoBack} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: postSelectors.getItem(state),
});

const mapDispatchToProps = {
  fetchPost: postOperations.fetchItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostContainer);
