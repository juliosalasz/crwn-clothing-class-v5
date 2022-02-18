import CartTypes from "./cartTypes";
export const ToggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
