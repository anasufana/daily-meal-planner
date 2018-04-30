import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/MealResultsListing.css';

const MealCard = props => (
  <div
    className={`single-column ${props.className}`}
    onClick={() => { props.handleMealRequest({ ...props.details }); }}
    onKeyPress={() => { props.handleMealRequest({ ...props.details }); }}
    role="button"
    tabIndex={0}
  >
    <h2 className="meal-title">{props.meal}</h2>
    <div className="img-container">
      <img className="image-recipe" src={`https://spoonacular.com/recipeImages/${props.details.image}`} alt="Breakfast-recipe" title="Breakfast-recipe" />
      <div className="hover-box">
        <h3 className="hover-title">Time to cook!</h3>
        <img className="img-cooking" src="/img/cooking.svg" alt="Time" title="Time" height="60" width="60" />
      </div>
    </div>
    <div className="meal-details-container">
      <div className="meal-details">
        <h3 className="recipe-title">{ props.details.title } </h3>
      </div>
      <div className="meal-details clock-div">
        <img className="img-clock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
        <h3 className="recipe-duration">{ props.details.readyInMinutes }&apos;</h3>
      </div>
    </div>
  </div>
);

MealCard.propTypes = {
  handleMealRequest: PropTypes.func.isRequired,
  meal: PropTypes.string.isRequired,
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    imagrUrls: PropTypes.string,
    readyInMinutes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

MealCard.defaultProps = {
  className: '',
};

export default MealCard;
