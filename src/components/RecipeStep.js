import React from 'react';
import '../css/components/MealCaloriesDonut.css';

const RecipeStep = props => (
  <div className="steps-container">
    <h2 className="step-title">Step <span className="step-number">{ props.details.number }</span>:</h2>
    <p className="step-description">{ props.details.step }</p>
  </div>
);

export default RecipeStep;