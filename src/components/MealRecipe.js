import React from 'react';
import '../css/components/MealRecipe.css';
import RecipeStep from './RecipeStep';

const MealRecipe = props => (
  <div className="recipe-page-container">
    <h1 className="recipe-title-page">{ props.details.recipeTitle }</h1>
    <div className="section-ingredients">
      <div className="recipe-img-box">
        <img className="image-recipe-page" src={`https://spoonacular.com/recipeImages/${props.details.recipeImage}`} alt="test-img" />
        <div className="clock-div-container">
          <div className="clock-div-button">
            <img className="img-clock" src="/img/clock.svg" alt="Time" title="Time" height="20" width="20" />
            <h3 className="recipe-duration-page">{ props.details.readyInMinutes }'</h3>
          </div>
        </div>
      </div>
      <div className="ingredients-box">
        <h2 className="ingredients-title">Ingredients:</h2>
        <ul className="ingredients-list">
          {
             props.details.ingredients[0].map((ingredient) => {
               return (<li className="ingredients-list-item">{ ingredient }</li>)
           })
        }
        </ul>
      </div>
    </div>
    <div>
      {
      props.details.recipes[0].map((recipe, i) => {
        return (
          <div>
            <h1>{recipe.name ? recipe.name : 'Recipe Steps'}</h1>
            {
              recipe.steps.map((step, j) => {
                    return (<RecipeStep key={`${i}${j}`} details={step} />)
              })
            }
          </div>
        )
        })
      }
    </div>
  </div>
);

export default MealRecipe;
