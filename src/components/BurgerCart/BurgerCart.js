import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './BurgerCart.css';
import { cleanCart, modalOpen, removeFromCart } from '../../actions';
import { getCartSum } from '../../selectors';

const BurgerCart = props =>
  <div className="cart-content container">
    {props.cart.length ? (
      <Fragment>
        {props.cart
          .map((burger, i) =>
                 <div className="cart-item" key={i}>
                   <div className="cart-item__pic">
                     <img src={burger.burgerImg} alt="burger pic" />
                   </div>
                   <div className="cart-item__info">
                     <div className="cart-item__info--details">
                       <div>{burger.burgerName}</div>
                       <div>
                         {burger.hasDiscount ? <span>{burger.totalPrice * 2} UAH</span> : null}{burger.totalPrice} UAH
                       </div>
                     </div>
                     <div className="cart-item__info--ingredients">
                       {Object
                         .entries(burger.ingredients)
                         .map(
                           (ingredient, i) =>
                             <div key={i} className="ingredient">
                               {ingredient[0] === 'bun' ? 'Основа:' :
                                 ingredient[0] === 'meat' ? 'Мясо:' :
                                   ingredient[0] === 'cheese' ? 'Сыры:' :
                                     ingredient[0] === 'sauce' ? 'Соусы:' :
                                       'Овощи:'}
                               {ingredient[1]
                                 .map((item, i) => {
                                        if (typeof item === 'object') {
                                          return <p key={i}>● {item.ingredientName}</p>;
                                        } else {
                                          return <p key={i}>● {item}</p>;
                                        }
                                      }
                                 )}
                             </div>
                         )}
                     </div>
                   </div>
                   <button className="btn cart-item__remove" onClick={() => props.removeFromCart(burger)}>Отменить
                   </button>
                 </div>
          )}
        <div className="cart-sum">
          Сумма заказа: <span>{props.cartSum} UAH</span>
        </div>
        <button className="btn" onClick={() => props.modalOpen('cart')}>Оформить заказ</button>
        <button className="btn" onClick={() => props.cleanCart()}>Отменить заказ</button>
      </Fragment>
    ) : <div>Ваша корзина пуста</div>}
  </div>;

const mapStateToProps = state => ({
  cart: state.cart,
  cartSum: getCartSum(state)
});

const mapDispatchToProps = dispatch => ({
  cleanCart: bindActionCreators(cleanCart, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
  modalOpen: bindActionCreators(modalOpen, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerCart);