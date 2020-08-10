
const existingCartItem = (cartItems, item) => cartItems.find(cartItem => cartItem.id === item.id);

export const addItemToCart = (cartItems, itemToBeAdded) => {
  if (existingCartItem(cartItems, itemToBeAdded)) {
    return cartItems.map(cartItem => {
      return (cartItem.id === itemToBeAdded.id) ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    });
  }

  return [...cartItems, { ...itemToBeAdded, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToBeCleared) => cartItems.filter(
  (cartItem) => cartItem.id !== itemToBeCleared.id
);

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  const existingItem = existingCartItem(cartItems, itemToBeRemoved);
  if (existingItem && existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, itemToBeRemoved);
  }
  return cartItems.map(
    (cartItem) => (cartItem.id === itemToBeRemoved.id) ?
      { ...cartItem, quantity: cartItem.quantity - 1 } :
      cartItem
  );
};

