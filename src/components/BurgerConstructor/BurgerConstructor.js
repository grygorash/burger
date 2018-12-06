import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import IngredientsConstructorStep from './IngredientsConstructorStep/IngredientsConstructorStep';
import FinalConstructorStep from './FinalConstructorStep/FinalConstructorStep';
import { getConstructorSum } from '../../selectors';
import './BurgerConstructor.css';


const BurgerConstructor = (props) =>
  <div className="constructor-content">
    {props.constructorStep === 1 ?
      <IngredientsConstructorStep
        ingredientsArray={props.ingredients.bun}
        name="bun"
        h3="основу" /> :
      props.constructorStep === 2 ?
        <IngredientsConstructorStep
          ingredientsArray={props.ingredients.meat}
          name="meat"
          h3="мясо" /> :
        props.constructorStep === 3 ?
          <IngredientsConstructorStep
            ingredientsArray={props.ingredients.cheese}
            name="cheese"
            h3="сыр" /> :
          props.constructorStep === 4 ?
            <IngredientsConstructorStep
              ingredientsArray={props.ingredients.sauce}
              name="sauce"
              h3="соус" /> :
            props.constructorStep === 5 ?
              <IngredientsConstructorStep
                ingredientsArray={props.ingredients.vegetables}
                name="vegetables"
                h3="овощи" /> :
              <FinalConstructorStep />
    }
    <div className="constructor-sum">Стоимость бургера: <span>{props.getConstructorSum} UAH</span></div>
  </div>;


const mapStateToProps = state => ({
  ingredients: state.ingredients,
  constructorStep: state.constructorStep,
  getConstructorSum: getConstructorSum(state)
});

export default withRouter(connect(mapStateToProps, null)(BurgerConstructor));