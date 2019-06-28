import React, { Component } from 'react';

import PostView from './PostView';

export default class PostContainer extends Component {
  componentDidMount() {
    const { id } = this.props;
    const idNumber = Number(id);
    const isNan = Number.isNaN(idNumber);

    if (isNan) {
      return alert('Wrong id!');
    }
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
        <PostView handleGoBack={this.handleGoBack} />
      </div>
    );
  }
}
