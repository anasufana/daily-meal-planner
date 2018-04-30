import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/MealRecipe.css';

const RecipeStep = props => (
  <div className="steps-container">
    <h2 className="step-title">Step <span className="step-number">{ props.details.number }</span>:</h2>
    <p className="step-description">{ props.details.step }</p>
  </div>
);

RecipeStep.propTypes = {
  details: PropTypes.shape({
    number: PropTypes.number.isRequired,
    step: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeStep;
