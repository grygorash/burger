import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { constructorNext, constructorPrev, ingredientAdd, ingredientRemove } from '../../actions';
import bunWithSesame from '../../img/bun-with-sesame.jpg';
import bunWithoutSesame from '../../img/bun.jpg';
import veal from '../../img/veal.jpg';
import pork from '../../img/pork.jpg';
import beef from '../../img/beef.jpg';
import chicken from '../../img/chicken.jpg';
import turkey from '../../img/turkey.jpg';
import emmental from '../../img/emmental.jpg';
import mozzarella from '../../img/mozzarella.jpg';
import gouda from '../../img/gauda.jpg';
import cheddar from '../../img/cheddar.jpg';
import mustard from '../../img/mustard.jpg';
import ketchup from '../../img/ketchup.jpg';
import mayonnaise from '../../img/mayonnaise.jpg';
import bbq from '../../img/bbq.jpg';
import pesto from '../../img/pesto.jpg';
import cucumber from '../../img/cucumber.jpg';
import tomato from '../../img/tomato.jpg';
import iceberg from '../../img/iceberg.jpg';
import onion from '../../img/onion.jpg';
import './BurgerConstructor.css';


const BurgerConstructor = (props) => {
  return (
    <div className="constructor-content">
      <div className={props.constructorStep === 1 ? 'constructor-step active' : 'constructor-step'}>
        <h3>Выберите основу для Вашего бургера</h3>
        <div className="ingredients-list flex">
          {props.ingredients.bun
            .map((bun, i) =>
                   <Fragment key={i}>
                     <button className={bun.added ? 'btn show' : 'btn'}
                             onClick={() => props.ingredientRemove({ingredientName: bun.ingredientName}, 'bun')}>X
                     </button>
                     <div className={bun.added ? 'ingredient active' : 'ingredient'}
                          onClick={() => props.ingredientAdd({ingredientName: bun.ingredientName, price: bun.price}, 'bun')}>
                       <img src={bun.ingredientName === 'булочка с кунжутом' ? bunWithSesame : bunWithoutSesame}
                            alt="ingredient" />
                       <p className="ingredient-name">{bun.ingredientName}</p>
                       <p className="ingredient-price">Цена: {bun.price} UAH</p>
                     </div>
                   </Fragment>
            )}
        </div>
        <button className={props.burgersConstructor.bun !== undefined && props.burgersConstructor.bun.length ?
          'btn constructor-next' : 'btn constructor-next disabled'}
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </div>

      <div className={props.constructorStep === 2 ? 'constructor-step active' : 'constructor-step'}>
        <h3>Выберите мясо для Вашего бургера</h3>
        <div className="ingredients-list flex">
          {props.ingredients.meat
            .map((meat, i) =>
                   <Fragment key={i}>
                     <button className={meat.added ? 'btn show' : 'btn'}
                             onClick={() => props.ingredientRemove({ingredientName: meat.ingredientName}, 'bun')}>X
                     </button>
                     <div className={meat.added ? 'ingredient active' : 'ingredient'}
                          onClick={() => props.ingredientAdd({ingredientName: meat.ingredientName, price: meat.price}, 'meat')}>
                       <img src={
                         meat.ingredientName === 'котлета телятина' ? veal :
                           meat.ingredientName === 'котлета свинина' ? pork :
                             meat.ingredientName === 'котлета говядина' ? beef :
                               meat.ingredientName === 'котлета курица' ? chicken :
                                 turkey}
                            alt="ingredient" />
                       <p className="ingredient-name">{meat.ingredientName}</p>
                       <p className="ingredient-price">Цена: {meat.price} UAH</p>
                     </div>
                   </Fragment>
            )}
        </div>
        <button className="btn constructor-prev"
                onClick={() => props.constructorPrev()}>Предыдущий шаг
        </button>
        <button className={props.burgersConstructor.meat !== undefined ?
          'btn constructor-next' : 'btn constructor-next disabled'}
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </div>

      <div className={props.constructorStep === 3 ? 'constructor-step active' : 'constructor-step'}>
        <h3>Выберите сыр для Вашего бургера</h3>
        <div className="ingredients-list flex">
          {props.ingredients.cheese
            .map((cheese, i) =>
                   <div key={i}
                        className={cheese.added ? 'ingredient active' : 'ingredient'}
                        onClick={() => props.ingredientAdd({ingredientName: cheese.ingredientName, price: cheese.price}, 'cheese')}>
                     <img src={
                       cheese.ingredientName === 'сыр эмменталь' ? emmental :
                         cheese.ingredientName === 'сыр моцарелла' ? mozzarella :
                           cheese.ingredientName === 'сыр гауда' ? gouda :
                             cheddar
                     }
                          alt="ingredient" />
                     <p className="ingredient-name">{cheese.ingredientName}</p>
                     <p className="ingredient-price">Цена: {cheese.price} UAH</p>
                   </div>
            )}
        </div>
        <button className="btn constructor-prev"
                onClick={() => props.constructorPrev()}>Предыдущий шаг
        </button>
        <button className={props.burgersConstructor.cheese !== undefined ?
          'btn constructor-next' : 'btn constructor-next disabled'}
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </div>

      <div className={props.constructorStep === 4 ? 'constructor-step active' : 'constructor-step'}>
        <h3>Выберите соус для Вашего бургера</h3>
        <div className="ingredients-list flex">
          {props.ingredients.sauce
            .map((sauce, i) =>
                   <div key={i}
                        className={sauce.added ? 'ingredient active' : 'ingredient'}
                        onClick={() => props.ingredientAdd({ingredientName: sauce.ingredientName, price: sauce.price}, 'sauce')}>
                     <img src={
                       sauce.ingredientName === 'горчица' ? mustard :
                         sauce.ingredientName === 'кетчуп' ? ketchup :
                           sauce.ingredientName === 'майонез' ? mayonnaise :
                             sauce.ingredientName === 'соус bbq' ? bbq :
                               pesto
                     }
                          alt="ingredient" />
                     <p className="ingredient-name">{sauce.ingredientName}</p>
                     <p className="ingredient-price">Цена: {sauce.price} UAH</p>
                   </div>
            )}
        </div>
        <button className="btn constructor-prev"
                onClick={() => props.constructorPrev()}>Предыдущий шаг
        </button>
        <button className={props.burgersConstructor.sauce !== undefined ?
          'btn constructor-next' : 'btn constructor-next disabled'}
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </div>

      <div className={props.constructorStep === 5 ? 'constructor-step active' : 'constructor-step'}>
        <h3>Выберите овощи для Вашего бургера</h3>
        <div className="ingredients-list flex">
          {props.ingredients.vegetables
            .map((vegetable, i) =>
                   <div key={i}
                        className={vegetable.added ? 'ingredient active' : 'ingredient'}
                        onClick={() => props.ingredientAdd({ingredientName: vegetable.ingredientName, price: vegetable.price}, 'vegetables')}>
                     <img src={
                       vegetable.ingredientName === 'огурцы' ? cucumber :
                         vegetable.ingredientName === 'помидоры' ? tomato :
                           vegetable.ingredientName === 'красный лук' ? onion :
                             iceberg
                     }
                          alt="ingredient" />
                     <p className="ingredient-name">{vegetable.ingredientName}</p>
                     <p className="ingredient-price">Цена: {vegetable.price} UAH</p>
                   </div>
            )}
        </div>
        <button className="btn constructor-prev"
                onClick={() => props.constructorPrev()}>Предыдущий шаг
        </button>
        <button className={props.burgersConstructor.vegetables !== undefined ?
          'btn constructor-next' : 'btn constructor-next disabled'}
                onClick={() => props.constructorNext()}>Следующий шаг
        </button>
      </div>

      <div className={props.constructorStep === 6 ? 'constructor-step active' : 'constructor-step'}>
        accept
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  constructorStep: state.constructorStep,
  burgersConstructor: state.burgersConstructor
});

const mapDispatchToProps = dispatch => ({
  ingredientAdd: bindActionCreators(ingredientAdd, dispatch),
  ingredientRemove: bindActionCreators(ingredientRemove, dispatch),
  constructorNext: bindActionCreators(constructorNext, dispatch),
  constructorPrev: bindActionCreators(constructorPrev, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerConstructor);