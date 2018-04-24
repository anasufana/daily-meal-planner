import React from 'react';
import '../css/components/MealRecipe.css';
import RecipeStep from './RecipeStep';

const MealRecipe = (props) => {

  return (
    <div className="recipe-page-container">
      <h1 className="recipe-title-page">Recipe Title</h1>
      <div className="section-ingredients">
        <div className="recipe-img-box">
          <img className="image-recipe-page" src={`https://spoonacular.com/recipeImages/${props.details.image}`} alt="test-img" />
        </div>
        <div className="ingredients-box">
          <h2 className="ingredients-title">Ingredients:</h2>
          <ul className="ingredients-list">
            <li className="ingredients-list-item">50g fresh pesto</li>
            <li className="ingredients-list-item">100g butter</li>
            <li className="ingredients-list-item">230g sugar</li>
            <li className="ingredients-list-item">100g lime skin</li>
            <li className="ingredients-list-item">500g passata di pomodoro</li>
            <li className="ingredients-list-item">100g bread crumbles</li>
            <li className="ingredients-list-item">100g of butter</li>
            <li className="ingredients-list-item">50g of pesto</li>
            <li className="ingredients-list-item">100g of butter</li>
            <li className="ingredients-list-item">100g of butter</li>
          </ul>
        </div>
        <div className="clock-div-button">
          <img className="img-clock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
          <h3 className="recipe-duration-page">20" min</h3>
        </div>
      </div>
      <RecipeStep />
      <RecipeStep />
      <RecipeStep />
      <RecipeStep />
    </div>
  );
};

export default MealRecipe;