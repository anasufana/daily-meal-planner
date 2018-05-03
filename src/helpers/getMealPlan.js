/* global fetch, Headers */
import apiResponse2 from '../mockAPIresponse/apiResponse';

const API_KEY = process.env.REACT_APP_API_KEY;
const testing = true;

const getMealPlan = (params, history) => {
  if (testing) {
    this.setState({ apiResponse: { ...apiResponse2 } });
    this.props.history.push('/results'); //eslint-disable-line
  } else {
    const defaultQueryObject = {
      diet: '',
      exclude: '',
      targetCalories: '',
      timeFrame: 'day',
    };
    const filteredDiet = params.diets.filter(diet => diet.selected === true);

    const requestObject = {
      ...defaultQueryObject,
      diet: filteredDiet[0].value,
      exclude: params.excludeValue.value.toLowerCase(),
      targetCalories: params.targetCaloriesValue.value,
    };

    const euc = encodeURIComponent;
    const query = Object.keys(requestObject)
      .map(k => `${euc(k)}=${euc(requestObject[k])}`)
      .join('&');

    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?${query}&stepBreakdown=false`,
      {
        method: 'GET',
        headers: new Headers({
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json',
        }),
      },
    )
      .then(body => body.json())
      .then((body) => {
        if (!body.status) {
          this.setState({ apiResponse: { ...body } });
          this.setState({ apiResponseError: false });
        } else {
          this.setState({ apiResponseError: true });
          this.setState({ apiResponse: '' });
        }
        history.push('/results');
      })
      .catch(err => console.error(err)); //eslint-disable-line
  }
};

export default getMealPlan;
