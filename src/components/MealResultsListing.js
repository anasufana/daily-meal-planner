import React from 'react';
import MealCard from './MealCard';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

class MealResultsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
    };
  }
 
  render() {
    return (
    <div className="resultsContainer">
      <div className="mealCaloriesLabel">
        <h3 className="h3Calories">Total day calories: <span className="caloriesAmount">2800</span></h3>
      </div>
      <div className="meal-results-listing">
        <MealCard />
        <MealCard />
        <MealCard />
      </div>

      
    </div>
    );
  }
}

export default MealResultsListing;