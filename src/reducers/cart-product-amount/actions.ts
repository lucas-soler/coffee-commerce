import { CartProductAmount } from "../../contexts/CartContext";

interface CartProductAmountActionPayload {
  cartProductAmount: CartProductAmount;
}

export enum CartProductAmountActionTypes {
  ADD_AMOUNT = "ADD_AMOUNT",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
  CLEAR_CART = "CLEAR_CART",
}

export interface CartProductAmountsActionType {
  type: CartProductAmountActionTypes;
  payload: CartProductAmountActionPayload;
}

export function addProductAmountAction(cartProductAmount: CartProductAmount) {
  return {
    type: CartProductAmountActionTypes.ADD_AMOUNT,
    payload: {
      cartProductAmount,
    },
  };
}

export function changeProductAmountAction(newAmount: CartProductAmount) {
  return {
    type: CartProductAmountActionTypes.CHANGE_AMOUNT,
    payload: {
      cartProductAmount: newAmount,
    },
  };
}

export function clearCartAction() {
  return {
    type: CartProductAmountActionTypes.CLEAR_CART,
    payload: {
      cartProductAmount: {
        productID: 0,
        amount: 0,
        price: 0,
      },
    },
  };
}
