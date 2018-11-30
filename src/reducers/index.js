import {
  ADD_TO_CART,
  CLEAN_CART,
  CONSTRUCTOR_NEXT,
  CONSTRUCTOR_PREV,
  FEEDBACK_TEL,
  FETCH_LOCAL_SUCCESS,
  FETCH_SUCCESS,
  INGREDIENT_ADD, INGREDIENT_REMOVE,
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
        price: 80,
        added: false
      },
      {
        ingredientName: 'булочка',
        price: 70,
        added: false
      }
    ],
    meat: [
      {
        ingredientName: 'котлета телятина',
        price: 80,
        added: false
      },
      {
        ingredientName: 'котлета свинина',
        price: 80,
        added: false
      },
      {
        ingredientName: 'котлета говядина',
        price: 80,
        added: false
      },
      {
        ingredientName: 'котлета курица',
        price: 60,
        added: false
      },
      {
        ingredientName: 'котлета индейка',
        price: 100,
        added: false
      }
    ],
    cheese: [
      {
        ingredientName: 'сыр эмменталь',
        price: 20,
        added: false
      },
      {
        ingredientName: 'сыр моцарелла',
        price: 15,
        added: false
      },
      {
        ingredientName: 'сыр гауда',
        price: 30,
        added: false
      },
      {
        ingredientName: 'сыр чеддер',
        price: 25,
        added: false
      }
    ],
    sauce: [
      {
        ingredientName: 'горчица',
        price: 15,
        added: false
      },
      {
        ingredientName: 'кетчуп',
        price: 15,
        added: false
      },
      {
        ingredientName: 'майонез',
        price: 15,
        added: false
      },
      {
        ingredientName: 'соус bbq',
        price: 30,
        added: false
      },
      {
        ingredientName: 'соус песто',
        price: 30,
        added: false
      }
    ],
    vegetables: [
      {
        ingredientName: 'огурцы',
        price: 10,
        added: false
      },
      {
        ingredientName: 'помидоры',
        price: 10,
        added: false
      },
      {
        ingredientName: 'айсберг',
        price: 10,
        added: false
      },
      {
        ingredientName: 'красный лук',
        price: 10,
        added: false
      }
    ]
  },
  burgersConstructor: {},
  cart: [],
  feedbackTel: '',
  constructorStep: 1,
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
      return dotProp.set(state, `cart`, cart => [...cart, {...action.burger, burgerId: +new Date()}]);

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

    case INGREDIENT_ADD:
      if (action.ingredientName === 'bun') {
        const indexOfIngredientAdded = state.ingredients.bun.findIndex(bun => bun.ingredientName === action.ingredient.ingredientName);
        return dotProp.set(
          dotProp.set(
            dotProp.set(state, `ingredients.bun`, [{ingredientName: 'булочка с кунжутом', price: 80, added: false}, {ingredientName: 'булочка', price: 70, added: false}]),
            `ingredients.bun.${indexOfIngredientAdded}.added`,
            true
          ),
          `burgersConstructor.bun`,
          [action.ingredient]
        );
      } else if (action.ingredientName === 'meat') {
        const indexOfIngredientAdded = state.ingredients.meat.findIndex(meat => meat.ingredientName === action.ingredient.ingredientName);
        return dotProp.set(
          dotProp.set(state, `ingredients.meat.${indexOfIngredientAdded}.added`, true),
          `burgersConstructor.meat`,
          meat => [...meat, action.ingredient]
        );
      } else if (action.ingredientName === 'cheese') {
        const indexOfIngredientAdded = state.ingredients.cheese.findIndex(cheese => cheese.ingredientName === action.ingredient.ingredientName);
        return dotProp.set(
          dotProp.set(state, `ingredients.cheese.${indexOfIngredientAdded}.added`, true),
          `burgersConstructor.cheese`,
          cheese => [...cheese, action.ingredient]
        );
      } else if (action.ingredientName === 'sauce') {
        const indexOfIngredientAdded = state.ingredients.sauce.findIndex(sauce => sauce.ingredientName === action.ingredient.ingredientName);
        return dotProp.set(
          dotProp.set(state, `ingredients.sauce.${indexOfIngredientAdded}.added`, true),
          `burgersConstructor.sauce`,
          sauce => [...sauce, action.ingredient]
        );
      } else if (action.ingredientName === 'vegetables') {
        const indexOfIngredientAdded = state.ingredients.vegetables.findIndex(vegetables => vegetables.ingredientName === action.ingredient.ingredientName);
        return dotProp.set(
          dotProp.set(state, `ingredients.vegetables.${indexOfIngredientAdded}.added`, true),
          `burgersConstructor.vegetables`,
          vegetables => [...vegetables, action.ingredient]
        );
      } else {
        return state;
      }

    case INGREDIENT_REMOVE:
      if (action.ingredientName === 'bun') {
        const indexOfIngredientRemoved = state.ingredients.bun.findIndex(bun => bun.ingredientName === action.ingredient.ingredientName);
        const indexOfConstructorRemoved = state.burgersConstructor.bun.findIndex(bun => bun.ingredientName === action.ingredient.ingredientName);
        return dotProp.delete(
          dotProp.set(state, `ingredients.bun.${indexOfIngredientRemoved}.added`, false),
          `burgersConstructor.bun.${indexOfConstructorRemoved}`);
      } else if (action.ingredientName === 'meat') {
        const indexOfIngredientRemoved = state.ingredients.meat.findIndex(meat => meat.ingredientName === action.ingredient.ingredientName);
        const indexOfConstructorRemoved = state.burgersConstructor.meat.findIndex(meat => meat.ingredientName === action.ingredient.ingredientName);
        return dotProp.delete(
          dotProp.set(state, `ingredients.meat.${indexOfIngredientRemoved}.added`, false),
          `burgersConstructor.meat.${indexOfConstructorRemoved}`);
      } else {
        return state;
      }

    case CONSTRUCTOR_NEXT:
      return {
        ...state,
        constructorStep: state.constructorStep + 1
      };

    case CONSTRUCTOR_PREV:
      return {
        ...state,
        constructorStep: state.constructorStep - 1
      };

    default:
      return state;
  }
}