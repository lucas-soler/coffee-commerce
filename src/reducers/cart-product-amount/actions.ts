import { ProductAmount } from "./reducer";

interface CartProductAmountActionPayload {
  cartProductAmount: ProductAmount;
}

export enum CartProductAmountActionTypes {
  ADD_AMOUNT = "ADD_AMOUNT",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
}

export interface CartProductAmountsActionType {
  type: CartProductAmountActionTypes;
  payload: CartProductAmountActionPayload;
}

export function addProductAmountAction(cartProductAmount: ProductAmount) {
  return {
    type: CartProductAmountActionTypes.ADD_AMOUNT,
    payload: {
      cartProductAmount,
    },
  };
}

export function changeProductAmountAction(newAmount: ProductAmount) {
  return {
    type: CartProductAmountActionTypes.CHANGE_AMOUNT,
    payload: {
      cartProductAmount: newAmount,
    },
  };
}
