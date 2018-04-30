import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealCard from './MealCard';
import '../css/components/MealResultsListing.css';
import '../css/components/MealCard.css';

const MealResultsListing = props => (
  <div className="results-container">
    <Link to="/" className="back-link" href="/">&lt; Go back</Link>
    <div className="meal-calories-label">
      <h3 className="h3-calories">Total day calories:
        <span className="calories-amount">{ props.apiResponse.nutrients.calories }</span>
      </h3>
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
