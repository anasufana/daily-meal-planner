import React from 'react';
import '../css/components/MealResultsListing.css';

const MealCard = props => (
 <div className="single-column">
    <h2 className="meal-title">{props.meal}</h2>
    <div className="img-container">
      <img className="image-recipe" src="/img/healthy-food-1.jpg" alt="Breakfast-recipe" title="Breakfast-recipe"  />
      <a href="#"><div className="hover-box">
        <h3 className="hover-title">Time to cook!</h3>
        <img className="img-cooking" src="/img/cooking.svg" alt="Time" title="Time" height="60" width="60" />
      </div></a>
    </div>
    <div className="meal-details-container">
      <div className="meal-details">
        <h3 className="recipe-title">Pastasciutta</h3>
      </div>
      <div className="meal-details clock-div">
        <img className="img-clock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
        <h3 className="recipe-duration">49'</h3>
      </div>
    </div>
 </div>

);

export default MealCard;