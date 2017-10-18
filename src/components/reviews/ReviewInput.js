import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }
  handleOnChange(event){
    this.setState({
      text: event.target.value,
    });
  }
  handleOnSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        restaurantId: this.props.restaurantId,
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
        Review Input
      </div>
    );
  }
};

export default ReviewInput;
