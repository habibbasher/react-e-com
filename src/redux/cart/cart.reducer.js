import { CartActionTypes } from './cart.types';

import { addItemToCart, removeItemFromCart, clearItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const toggleCartHidden = (state, action) => ({
  ...state,
  hidden: action.payload
});

const addItem = (state, action) => ({
  ...state,
  cartItems: addItemToCart(state.cartItems, action.payload)
});

const removeItem = (state, action) => ({
  ...state,
  cartItems: removeItemFromCart(state.cartItems, action.payload)
});

const clearItem = (state, action) => ({
  ...state,
  cartItems: clearItemFromCart(state.cartItems, action.payload)
});

const clearCart = (state) => ({
  ...state,
  cartItems: []
});

const cartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return toggleCartHidden(state, action);
    case CartActionTypes.ADD_ITEM:
      return addItem(state, action);
    case CartActionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return clearItem(state, action);
    case CartActionTypes.CLEAR_CART:
      return clearCart(state);
    default:
      return state;
  }
};

export default cartReducer;