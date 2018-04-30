import React from 'react';
import { Link } from 'react-router-dom';

const MealResultsError = () => (
  <h2 className="meal-results-error">
    Ooops! We can&apos;t seem to find a meal plan with theese requirements.<br />
    <Link to="/" href="/">Try again?</Link>
  </h2>
);

export default MealResultsError;
