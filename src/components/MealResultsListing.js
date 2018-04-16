import React from 'react';
import '../css/components/MealResultsListing.css';

class MealResultsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
    };
  }
 
  render() {
    return (
      <div className="meal-results-listing">

        <div className="singleColumn">
          <h2 className="mealTitle">Breakfast</h2>
          <div className="imgContainer">
            <img className="imageRecipe" src="/img/healthy-food-1.jpg" alt="Breakfast-recipe" title="Breakfast-recipe"  />
            <a href="#"><div className="hoverBox">
              <h3 className="hoverTitle">Time to cook!</h3>
              <img className="imgCooking" src="/img/cooking.svg" alt="Time" title="Time" height="60" width="60" />
            </div></a>
          </div>
          <div className="mealDetailsContainer">
            <div className="mealDetails">
              <h3 className="recipeTitle">Pastasciutta</h3>
            </div>
            <div className="mealDetails clockDiv">
              <img className="imgClock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
              <h3 className="recipeDuration">49'</h3>
            </div>
          </div>
        </div>

        <div className="singleColumn">
          <h2 className="mealTitle">Lunch</h2>
          <div className="imgContainer">
            <img className="imageRecipe" src="/img/healthy-food-2.jpg" alt="Breakfast-recipe" title="Breakfast-recipe"  />
            <div className="hoverBox">
              <h3 className="hoverTitle">Time to cook!</h3>
              <img className="imgCooking" src="/img/cooking.svg" alt="Time" title="Time" height="60" width="60" />
            </div>
          </div>
          <div className="mealDetailsContainer">
            <div className="mealDetails">
              <h3 className="recipeTitle">Lasagna</h3>
            </div>
            <div className="mealDetails clockDiv">
              <img className="imgClock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
              <h3 className="recipeDuration">34'</h3>
            </div>
          </div>
        </div>
        
        <div className="singleColumn">
          <h2 className="mealTitle">Dinner</h2>
          <div className="imgContainer">
            <img className="imageRecipe" src="/img/healthy-food-3.jpg" alt="Breakfast-recipe" title="Breakfast-recipe"  />
            <div className="hoverBox">
              <h3 className="hoverTitle">Time to cook!</h3>
              <img className="imgCooking" src="/img/cooking.svg" alt="Time" title="Time" height="60" width="60" />
            </div>
          </div>
          <div className="mealDetailsContainer">
            <div className="mealDetails">
              <h3 className="recipeTitle">Vegan Pizza</h3>
            </div>
            <div className="mealDetails clockDiv">
              <img className="imgClock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
              <h3 className="recipeDuration">27'</h3>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MealResultsListing;