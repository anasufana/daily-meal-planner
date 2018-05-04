/* eslint class-methods-use-this: ["error", { "exceptMethods": ["validateCalories"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import MealPlannerInput from './MealPlannerInput';

class MealPlannerInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetCaloriesValue:
        {
          value: '',
          warning: true,
          warningText: 'Healthy target should be between 1000 and 3500',
        },
      excludeValue:
        {
          value: '',
          warning: false,
          warningText: 'Your exclude options are not valid. Try again.',
        },
      diets: [
        { value: '', name: 'Good to go!', selected: true },
        { value: 'gluten free', name: 'Gluten free', selected: false },
        { value: 'ketogenic', name: 'Ketogenic', selected: false },
        { value: 'vegetarian', name: 'Vegetarian', selected: false },
        { value: 'vegan', name: 'Vegan', selected: false },
        { value: 'pescetarian', name: 'Pescetarian', selected: false },
        { value: 'paleo', name: 'Paleo', selected: false },
      ],
      disableButton: true,
    };

    this.handleTargetCalorieChange = this.handleTargetCalorieChange.bind(this);
    this.handleExcludeValue = this.handleExcludeValue.bind(this);
    this.handleDietSelect = this.handleDietSelect.bind(this);
    this.validateCalories = this.validateCalories.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  disableButton() {
    this.setState({
      disableButton: (this.state.targetCaloriesValue.warning || this.state.excludeValue.warning),
    });
  }

  validateCalories(calories) {
    if (calories >= 1000 && calories <= 3500) {
      return false;
    }
    return true;
  }

  handleTargetCalorieChange(e) {
    const targetCalories = e.target.value;
    const warning = this.validateCalories(targetCalories);
    this.setState({
      targetCaloriesValue: { ...this.state.targetCaloriesValue, value: e.target.value, warning },
    }, () => this.disableButton());
  }

  handleExcludeValue(e) {
    const excludeText = e.target.value;
    let warning = false;

    //  Tests if the exclude text includes only characters, commas and spaces
    if (excludeText && !/^[a-zA-Z ,]+$/.test(excludeText)) {
      warning = true;
    }
    this.setState(
      { excludeValue: { ...this.state.excludeValue, value: e.target.value, warning } },
      () => this.disableButton(),
    );
  }

  handleDietSelect(e) {
    const dietSelectedBefore = this.state.diets.filter(diet => diet.selected === true);
    const dietSelectedNow = this.state.diets.filter(diet => diet.value === e.target.value);
    const dietFiltered = this.state.diets.filter(diet =>
      diet.value !== e.target.value && diet.selected !== true);

    this.setState({
      diets:
      [...dietFiltered,
        { ...dietSelectedBefore[0], selected: false },
        { ...dietSelectedNow[0], selected: true },
      ],
    });
  }


  render() {
    return (
      <MealPlannerInput
        {...this.state}
        handleSubmit={this.props.handleSubmit}
        handleDietSelect={(e) => { this.handleDietSelect(e); }}
        handleExcludeValue={(e) => { this.handleExcludeValue(e); }}
        handleTargetCalorieChange={(e) => { this.handleTargetCalorieChange(e); }}
      />
    );
  }
}

MealPlannerInputContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MealPlannerInputContainer;
