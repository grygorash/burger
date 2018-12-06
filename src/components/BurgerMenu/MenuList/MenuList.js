import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../../actions';

const MenuList = (props) =>
  <div className="menu-list flex">
    {props.burgers
      .map(
        (burger, i) =>
          <div className="menu-item" key={i}>
            <img src={burger.burgerImg} alt="burger-img" />
            <div className="burger-info flex">
              <div className="burger-info__name">Бургер: <span>«{burger.burgerName}»</span></div>
              <div className="burger-info__price">{burger.totalPrice} UAH</div>
            </div>
            <button className="btn" onClick={() => props.addToCart({...burger, burgerId: +new Date()})}>
              Добавить в корзину
            </button>
            <div className="burger-info-detail">
              {Object
                .entries(burger.ingredients)
                .map(
                  (ingredient, i) =>
                    <div key={i} className="ingredient">
                      {ingredient[0] === 'bun' ? 'Булочка:' :
                        ingredient[0] === 'meat' ? 'Мясо:' :
                          ingredient[0] === 'cheese' ? 'Сыры:' :
                            ingredient[0] === 'sauce' ? 'Соусы:' :
                              'Овощи:'}
                      {ingredient[1]
                        .map((item, i) =>
                               <p key={i}>● {item}</p>
                        )}
                    </div>
                )}
            </div>
          </div>
      )}
  </div>;

const mapStateToProps = state => ({
  burgers: state.burgers
});

const mapDispatchToProps = dispatch => ({
  addToCart: bindActionCreators(addToCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);