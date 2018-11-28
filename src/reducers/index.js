import {
  ADD_TO_CART,
  CLEAN_CART,
  FEEDBACK_TEL,
  FETCH_LOCAL_SUCCESS,
  FETCH_SUCCESS,
  MODAL_CLOSE,
  MODAL_OPEN,
  REMOVE_FROM_CART
} from '../actionTypes';
import * as dotProp from 'dot-prop-immutable';

export const initialState = {
  burgers: [
    {
      burgerId: 0,
      burgerName: 'San Diego',
      totalPrice: 230,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Burger-San-Diego2-min.jpg',
      ingredients: {
        bun: ['булочка'],
        meat: ['котлета телятина'],
        cheese: ['сыр эмменталь'],
        sauce: ['горчица', 'кетчуп'],
        vegetables: ['огурцы', 'помидоры', 'айсберг']
      }
    },
    {
      burgerId: 1,
      burgerName: 'Pulled Pork',
      totalPrice: 255,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Pulled-Pork-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета свинина'],
        cheese: ['сыр эмменталь', 'сыр моцарелла'],
        sauce: ['соус bbq'],
        vegetables: ['огурцы', 'помидоры', 'айсберг', 'красный лук']
      }
    },
    {
      burgerId: 2,
      burgerName: 'Arkansas',
      totalPrice: 225,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Arkansas-min-1.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета говядина'],
        cheese: ['сыр моцарелла'],
        sauce: ['соус bbq'],
        vegetables: ['помидоры', 'айсберг', 'красный лук']
      }
    },
    {
      burgerId: 3,
      burgerName: 'Williams',
      totalPrice: 245,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Williams-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета говядина'],
        cheese: ['сыр гауда'],
        sauce: ['горчица', 'кетчуп', 'майонез'],
        vegetables: ['помидоры', 'айсберг', 'красный лук']
      }
    },
    {
      burgerId: 4,
      burgerName: 'New York',
      totalPrice: 345,
      burgerImg: 'https://theburger.ua/wp-content/uploads/New-York-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета говядина', 'котлета говядина'],
        cheese: ['сыр чеддер'],
        sauce: ['горчица', 'майонез', 'соус песто'],
        vegetables: ['помидоры', 'айсберг', 'красный лук']
      }
    },
    {
      burgerId: 5,
      burgerName: 'Kentucky',
      totalPrice: 215,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Kentucky-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета курица'],
        cheese: ['сыр чеддер'],
        sauce: ['соус песто'],
        vegetables: ['помидоры', 'айсберг', 'красный лук']
      }
    },
    {
      burgerId: 6,
      burgerName: 'Indiana',
      totalPrice: 260,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Indiana-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета индейка'],
        cheese: ['сыр чеддер'],
        sauce: ['соус песто', 'горчица'],
        vegetables: ['помидоры', 'айсберг']
      }
    },
    {
      burgerId: 7,
      burgerName: 'Handy Man',
      totalPrice: 340,
      burgerImg: 'https://theburger.ua/wp-content/uploads/Handy-Man-min.jpg',
      ingredients: {
        bun: ['булочка с кунжутом'],
        meat: ['котлета свинина', 'котлета свинина'],
        cheese: ['сыр чеддер'],
        sauce: ['соус bbq', 'горчица'],
        vegetables: ['огурцы', 'помидоры', 'айсберг', 'красный лук']
      }
    }
  ],
  ingredients: {
    bun: [
      {
        ingredientName: 'булочка с кунжутом',
        price: 80
      },
      {
        ingredientName: 'булочка',
        price: 70
      }
    ],
    meat: [
      {
        ingredientName: 'котлета телятина',
        price: 80
      },
      {
        ingredientName: 'котлета свинина',
        price: 80
      },
      {
        ingredientName: 'котлета говядина',
        price: 80
      },
      {
        ingredientName: 'котлета курица',
        price: 60
      },
      {
        ingredientName: 'котлета индейка',
        price: 100
      }
    ],
    cheese: [
      {
        ingredientName: 'сыр эмменталь',
        price: 20
      },
      {
        ingredientName: 'сыр моцарелла',
        price: 15
      },
      {
        ingredientName: 'сыр гауда',
        price: 30
      },
      {
        ingredientName: 'сыр чеддер',
        price: 25
      }
    ],
    sauce: [
      {
        ingredientName: 'горчица',
        price: 15
      },
      {
        ingredientName: 'кетчуп',
        price: 15
      },
      {
        ingredientName: 'майонез',
        price: 15
      },
      {
        ingredientName: 'соус bbq',
        price: 30
      },
      {
        ingredientName: 'соус песто',
        price: 30
      }
    ],
    vegetables: [
      {
        ingredientName: 'огурцы',
        price: 10
      },
      {
        ingredientName: 'помидоры',
        price: 10
      },
      {
        ingredientName: 'айсберг',
        price: 10
      },
      {
        ingredientName: 'красный лук',
        price: 10
      }
    ]
  },
  cart: [],
  feedbackTel: '',
  modals: {
    cart: false,
    feedback: false
  }
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {...state};

    case FETCH_LOCAL_SUCCESS:
      return {...state, cart: action.cart};

    case ADD_TO_CART:
      return dotProp.set(state, `cart`, cart => [...cart, {...action.burger, burgerId: +new Date(), discount: false}]);

    case REMOVE_FROM_CART:
      const removedBurgerIndex = state.cart.findIndex(burger => burger.burgerId === action.burger.burgerId);
      return dotProp.delete(state, `cart.${removedBurgerIndex}`);

    case MODAL_OPEN:
      return dotProp.set(state, `modals.${action.modal}`, true);

    case MODAL_CLOSE:
      return dotProp.set(state, `modals.${action.modal}`, false);

    case FEEDBACK_TEL:
      return dotProp.set(state, `feedbackTel`, action.tel);

    case CLEAN_CART:
      return dotProp.set(state, `cart`, []);

    default:
      return state;
  }
}