import React from 'react';
import MealCard from './MealCard';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

const MealResultsListing = (props) => {
  if (props.apiResponse) {
    return (
      <div className="results-container">
        <div className="meal-calories-label">
          <h3 className="h3-calories">Total day calories:
            <span className="calories-amount">{ props.apiResponse.nutrients.calories }</span>
          </h3>
        </div>
        <div className="meal-results-listing">
          <MealCard meal="breakfast" details={props.apiResponse.meals[0]} />
          <MealCard meal="lunch" details={props.apiResponse.meals[1]} />
          <MealCard meal="dinner" details={props.apiResponse.meals[2]} />
        </div>
      </div>
    );
  }
  return '';
};

export default MealResultsListing;
