import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealCard from './MealCard';
import MealCaloriesDonut from './MealCaloriesDonut';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

const MealResultsListing = props => (
  <div className="results-container">
    <Link to="/" className="back-link" href="/">&lt; Go back</Link>
    <div className="calories-section">
          <div className="meal-calories-label">        
            <h3 className="h3-calories">Total day calories:</h3>
            <h3 className="h3-calories-number">{ this.state.apiResponse.nutrients.calories }</h3>
          </div>
          <div className="donut-box">
            <MealCaloriesDonut nutrients={ this.state.apiResponse.nutrients }/>
          </div>
          <div className="legend-box">
             <ul className="ul-legend">
               <li className="li-carbs">{Math.round(this.state.apiResponse.nutrients.carbohydrates) + 'g of'} Carbs</li>
               <li className="li-fats">{Math.round(this.state.apiResponse.nutrients.fat) + 'g of'} Fats</li>
               <li className="li-proteins">{Math.round(this.state.apiResponse.nutrients.protein) + 'g of'} Proteins</li>
             </ul>
          </div>
       </div>
    <div className="meal-results-listing">
      <MealCard className="slide-in-1" meal="breakfast" details={props.apiResponse.meals[0]} handleMealRequest={props.handleMealRequest} />
      <MealCard className="slide-in-2" meal="lunch" details={props.apiResponse.meals[1]} handleMealRequest={props.handleMealRequest} />
      <MealCard className="slide-in-3" meal="dinner" details={props.apiResponse.meals[2]} handleMealRequest={props.handleMealRequest} />
    </div>
  </div>
);

MealResultsListing.propTypes = {
  apiResponse: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imagrUrls: PropTypes.string,
      readyInMinutes: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    nutrients: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  handleMealRequest: PropTypes.func.isRequired,
};

export default MealResultsListing;
