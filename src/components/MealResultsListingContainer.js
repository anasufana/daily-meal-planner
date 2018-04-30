import React from 'react';
import MealResultsError from './MealResultsError';
import MealResultsListing from './MealResultsListing';

class MealResultsListingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    if (this.state.error) {
      return (
        <MealResultsError />
      );
    }
    return (
      <MealResultsListing {...this.state} />
    );
  }
}
export default MealResultsListingContainer;
