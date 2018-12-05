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
      if (action.pathname === '/constructor') {
        Object.values(state.ingredients).map(ingredient => ingredient.map(item => item.added = false));
        return dotProp.set(
          dotProp.set(dotProp.set(state, `constructorStep`, 1), `burgersConstructor`, {}),
          `cart`,
          cart => [...cart, action.burger]
        );
      } else {
        return dotProp.set(state, `cart`, cart => [...cart, {...action.burger, burgerId: +new Date()}]);
      }

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
      const ingredientAdd = (path, ingredientName) => {
        const indexOfIngredientAdded = path.findIndex(ingredient => ingredient.ingredientName === action.ingredient.ingredientName);
        if (ingredientName === 'bun') {
          path.forEach(ingredient => ingredient.added = false);
          return dotProp.set(
            dotProp.set(state, `ingredients.${ingredientName}.${indexOfIngredientAdded}.added`, true),
            `burgersConstructor.${ingredientName}`,
            [action.ingredient]
          );
        } else {
          return dotProp.set(
            dotProp.set(state, `ingredients.${ingredientName}.${indexOfIngredientAdded}.added`, true),
            `burgersConstructor.${ingredientName}`,
            ingredient => [...ingredient, action.ingredient]
          );
        }
      };

      if (action.ingredientName === 'bun') {
        return ingredientAdd(state.ingredients.bun, action.ingredientName);
      } else if (action.ingredientName === 'meat') {
        return ingredientAdd(state.ingredients.meat, action.ingredientName);
      } else if (action.ingredientName === 'cheese') {
        return ingredientAdd(state.ingredients.cheese, action.ingredientName);
      } else if (action.ingredientName === 'sauce') {
        return ingredientAdd(state.ingredients.sauce, action.ingredientName);
      } else if (action.ingredientName === 'vegetables') {
        return ingredientAdd(state.ingredients.vegetables, action.ingredientName);
      } else {
        return state;
      }

    case INGREDIENT_REMOVE:
      const ingredientRemove = (ingredientsPath, constructorPath, ingredientName) => {
        const indexOfIngredientRemoved = ingredientsPath.findIndex(ingredient => ingredient.ingredientName === action.ingredient.ingredientName);
        const indexOfConstructorRemoved = constructorPath.findIndex(bun => bun.ingredientName === action.ingredient.ingredientName);
        return dotProp.delete(
          dotProp.set(state, `ingredients.${ingredientName}.${indexOfIngredientRemoved}.added`, false),
          `burgersConstructor.${ingredientName}.${indexOfConstructorRemoved}`
        );
      };

      if (action.ingredientName === 'bun') {
        return ingredientRemove(state.ingredients.bun, state.burgersConstructor.bun, action.ingredientName);
      } else if (action.ingredientName === 'meat') {
        return ingredientRemove(state.ingredients.meat, state.burgersConstructor.meat, action.ingredientName);
      } else if (action.ingredientName === 'cheese') {
        return ingredientRemove(state.ingredients.cheese, state.burgersConstructor.cheese, action.ingredientName);
      } else if (action.ingredientName === 'sauce') {
        return ingredientRemove(state.ingredients.sauce, state.burgersConstructor.sauce, action.ingredientName);
      } else if (action.ingredientName === 'vegetables') {
        return ingredientRemove(state.ingredients.vegetables, state.burgersConstructor.vegetables, action.ingredientName);
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