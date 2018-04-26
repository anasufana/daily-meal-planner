import React from 'react';
import { Link } from 'react-router-dom';
import MealCard from './MealCard';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

class MealResultsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    if (this.state.error) {
      return (
        <h2 className="meal-results-error">
          Ooops! We can&apos;t seem to find a meal plan with theese requirements.<br />
          <Link to="/">Try again?</Link>
        </h2>
      )
    }
    return (
      <div className="results-container">
        <Link to="/" className="back-link">&lt; Go back</Link>
        <div className="meal-calories-label">
          <h3 className="h3-calories">Total day calories:
            <span className="calories-amount">{ this.state.apiResponse.nutrients.calories }</span>
          </h3>
        </div>
        <div className="meal-results-listing">
          <MealCard className="slide-in-1" meal="breakfast" details={this.state.apiResponse.meals[0]} handleMealRequest={this.state.handleMealRequest} />
          <MealCard className="slide-in-2" meal="lunch" details={this.state.apiResponse.meals[1]} handleMealRequest={this.state.handleMealRequest} />
          <MealCard className="slide-in-3" meal="dinner" details={this.state.apiResponse.meals[2]} handleMealRequest={this.state.handleMealRequest} />
        </div>
      </div>
    );
  }
}
export default MealResultsListing;
