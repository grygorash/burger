import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bunWithSesame from '../../../img/bun-with-sesame.jpg';
import bunWithoutSesame from '../../../img/bun.jpg';
import veal from '../../../img/veal.jpg';
import pork from '../../../img/pork.jpg';
import beef from '../../../img/beef.jpg';
import chicken from '../../../img/chicken.jpg';
import turkey from '../../../img/turkey.jpg';
import emmental from '../../../img/emmental.jpg';
import mozzarella from '../../../img/mozzarella.jpg';
import gouda from '../../../img/gauda.jpg';
import cheddar from '../../../img/cheddar.jpg';
import mustard from '../../../img/mustard.jpg';
import ketchup from '../../../img/ketchup.jpg';
import mayonnaise from '../../../img/mayonnaise.jpg';
import bbq from '../../../img/bbq.jpg';
import pesto from '../../../img/pesto.jpg';
import cucumber from '../../../img/cucumber.jpg';
import tomato from '../../../img/tomato.jpg';
import onion from '../../../img/onion.jpg';
import iceberg from '../../../img/iceberg.jpg';
import {
  constructorNext, constructorPrev, ingredientAdd, ingredientRemove
} from '../../../actions';

const IngredientsConstructorStep = props =>
  <div className={`${props.name}-step`}>
    <h3>Выберите {props.h3} для Вашего бургера</h3>
    <div className="ingredients-list flex">
      {props.ingredientsArray
        .map((ingredient, i) =>
               <Fragment key={i}>
                 <button className={ingredient.added ? 'btn show' : 'btn'}
                         onClick={() => props.ingredientRemove({ingredientName: ingredient.ingredientName}, props.name)}>X
                 </button>
                 <div className={ingredient.added ? 'ingredient active' : 'ingredient'}
                      onClick={() => props.ingredientAdd({ingredientName: ingredient.ingredientName, price: ingredient.price}, props.name)}>
                   {props.name === 'bun' ? <img
                       src={ingredient.ingredientName === 'булочка с кунжутом' ? bunWithSesame :
                         bunWithoutSesame} alt="ingredient" /> :
                     props.name === 'meat' ? <img src={ingredient.ingredientName === 'котлета телятина' ? veal :
                       ingredient.ingredientName === 'котлета свинина' ? pork :
                         ingredient.ingredientName === 'котлета говядина' ? beef :
                           ingredient.ingredientName === 'котлета курица' ? chicken :
                             turkey} alt="ingredient" /> :
                       props.name === 'cheese' ?
                         <img src={ingredient.ingredientName === 'сыр эмменталь' ? emmental :
                           ingredient.ingredientName === 'сыр моцарелла' ? mozzarella :
                             ingredient.ingredientName === 'сыр гауда' ? gouda :
                               cheddar} alt="ingredient" /> :
                         props.name === 'sauce' ? <img src={ingredient.ingredientName === 'горчица' ? mustard :
                           ingredient.ingredientName === 'кетчуп' ? ketchup :
                             ingredient.ingredientName === 'майонез' ? mayonnaise :
                               ingredient.ingredientName === 'соус bbq' ? bbq :
                                 pesto} alt="ingredient" /> :
                           <img src={ingredient.ingredientName === 'огурцы' ? cucumber :
                             ingredient.ingredientName === 'помидоры' ? tomato :
                               ingredient.ingredientName === 'красный лук' ? onion :
                                 iceberg} alt="ingredient" />}
                   <p className="ingredient-name">{ingredient.ingredientName}</p>
                   <p className="ingredient-price">Цена: {ingredient.price} UAH</p>
                 </div>
               </Fragment>)}
    </div>
    {props.name === 'bun' ?
      <button
        className={props.burgersConstructor.bun !== undefined && props.burgersConstructor.bun.length ?
          'btn constructor-next' : 'btn constructor-next disabled'}
        onClick={() => props.constructorNext()}>Следующий шаг
      </button> :
      <Fragment>
        <button className="btn constructor-prev"
                onClick={() => props.constructorPrev()}>Предыдущий шаг
        </button>
        <button className="btn constructor-next"
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </Fragment>
    }
  </div>;


const mapStateToProps = state => ({
  burgersConstructor: state.burgersConstructor
});

const mapDispatchToProps = dispatch => ({
  ingredientAdd: bindActionCreators(ingredientAdd, dispatch),
  ingredientRemove: bindActionCreators(ingredientRemove, dispatch),
  constructorNext: bindActionCreators(constructorNext, dispatch),
  constructorPrev: bindActionCreators(constructorPrev, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsConstructorStep);