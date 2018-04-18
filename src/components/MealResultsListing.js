import React from 'react';
import MealCard from './MealCard';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

const MealResultsListing = () => (
  <div className="results-container">
    <div className="meal-calories-label">
      <h3 className="h3-calories">Total day calories: <span className="calories-amount">2800</span></h3>
    </div>
    <div className="meal-results-listing">
      <MealCard meal="breakfast" />
      <MealCard meal="lunch" />
      <MealCard meal="dinner" />
    </div>
  </div>
);

export default MealResultsListing;
