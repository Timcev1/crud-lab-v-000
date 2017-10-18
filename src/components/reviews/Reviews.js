import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;