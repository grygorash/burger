import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { addToCart, constructorPrev } from '../../../actions';
import { getConstructorSum } from '../../../selectors';

const FinalConstructorStep = props => {
  const handleAddToCart = (constructorIngredients) => {
    props.addToCart({
                      burgerId: +new Date(),
                      burgerName: 'Свой Бургер',
                      totalPrice: props.getConstructorSum,
                      hasDiscount: false,
                      burgerImg: 'https://png.pngtree.com/svg/20161106/hamburger_burger_31438.png',
                      ingredients: {...constructorIngredients}
                    }, props.location.pathname);
    props.history.push('menu');
  };
  return (
    <div className="final-step">
      {Object.entries(props.burgersConstructor)
        .map((ingredient, i) =>
               <div key={i} className="ingredient">
                 {ingredient[0] === ' bun' ? ' Основа:' :
                   ingredient[0] === ' meat' ? ' Мясо:' :
                     ingredient[0] === ' cheese' ? ' Сыры:' :
                       ingredient[0] === ' sauce' ? ' Соусы:' :
                         ' Овощи:'}
                 {ingredient[1].map((item, i) => <p key={i}>● {item.ingredientName} - {item.price} UAH</p>)}
               </div>
        )}
      <button className="btn constructor-prev"
              onClick={() => props.constructorPrev()}>Предыдущий шаг
      </button>
      <button className="btn constructor-next"
              onClick={() => handleAddToCart(props.burgersConstructor)}>Добавить в заказ
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  burgersConstructor: state.burgersConstructor,
  getConstructorSum: getConstructorSum(state)

});

const mapDispatchToProps = dispatch => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  constructorPrev: bindActionCreators(constructorPrev, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FinalConstructorStep));