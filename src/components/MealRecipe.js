/* disable no-array-index-key */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/components/MealRecipe.css';
import RecipeStep from './RecipeStep';

const MealRecipe = props => (
  <div className="recipe-page-container slide-in-1">
    <Link to="/results" className="back-link" href="/results">&lt; Back to results</Link>
    <h1 className="recipe-title-page">{ props.details.recipeTitle }</h1>
    <div className="section-ingredients">
      <div className="recipe-img-box">
        <img className="image-recipe-page" src={`https://spoonacular.com/recipeImages/${props.details.recipeImage}`} alt="test-img" />
        <div className="clock-div-container">
          <div className="clock-div-button">
            <img className="img-clock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
            <h3 className="recipe-duration-page">{ props.details.readyInMinutes } &apos;</h3>
          </div>
        </div>
      </div>
      <div className="ingredients-box">
        <h2 className="ingredients-title">Ingredients:</h2>
        <ul className="ingredients-list">
          {
             props.details.ingredients[0]
              .map(ingredient => (<li className="ingredients-list-item">{ ingredient }</li>))
        }
        </ul>
      </div>
    </div>
    <div>
      {
      props.details.recipes[0].map((recipe, i) => (
        <div>
          <h1 className="h1-recipe-steps">{recipe.name ? recipe.name : 'Recipe Steps'}</h1>
          {
            recipe.steps
              .map((step, j) => (<RecipeStep key={`${i}${j}`} details={step} />))
          }
        </div>
        ))
      }
    </div>
  </div>
);

MealRecipe.propTypes = {
  details: PropTypes.shape({
    recipeTitle: PropTypes.string.isRequired,
    recipeImage: PropTypes.string.isRequired,
    readyInMinutes: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)),
    recipes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
      ingredients: PropTypes.arrayOf(PropTypes.string.isRequired),
      name: PropTypes.string.isRequired,
      steps: PropTypes.arrayOf(PropTypes.shape({
        number: PropTypes.number.isRequired,
        step: PropTypes.string.isRequired,
      })),
    }).isRequired).isRequired).isRequired,
  }).isRequired,
};

export default MealRecipe;
