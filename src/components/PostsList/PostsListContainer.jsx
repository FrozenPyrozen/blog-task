import React, { Component } from 'react';

import { connect } from 'react-redux';

import PostsListView from './PostsListView';

import { postsSelectors, postsOperations } from '../../redux/postList';

class PostsListContainer extends Component {
  componentDidMount() {
    const { fetchAll } = this.props;
    fetchAll();
  }
  render() {
    return (
      <div>
        <h1>PostsListContainer</h1>
        <PostsListView {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: postsSelectors.getItems(state),
});

const mapDispatchToProps = {
  fetchAll: postsOperations.fetchItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListContainer);
