import React, { Component } from 'react';
import Restaurant from './Restaurant'
// import ReviewInput from '../reviews/ReviewInput'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return (
        <div key={index}>
          <Restaurant restaurant={restaurant} store={this.props.store} />
        </div>
      )
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
