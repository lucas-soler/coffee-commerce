import { CartProductAmount } from "../../contexts/CartContext";
import {
  CartProductAmountActionTypes,
  CartProductAmountsActionType,
} from "./actions";

import { produce } from "immer";

export function cartProductAmountReducer(
  state: CartProductAmount[],
  action: CartProductAmountsActionType
) {
  const { type, payload } = action;

  switch (type) {
    case CartProductAmountActionTypes.ADD_AMOUNT:
      return produce(state, (draft) => {
        draft.push(payload.cartProductAmount);
      });

    case CartProductAmountActionTypes.CHANGE_AMOUNT: {
      return produce(state, (draft) => {
        const productAmountIndex = state.findIndex(
          (productAmount) =>
            productAmount.productID === payload.cartProductAmount.productID
        );

        if (payload.cartProductAmount.amount !== 0) {
          draft[productAmountIndex] = payload.cartProductAmount;
        } else {
          return draft.filter(
            (productAmount) =>
              productAmount.productID !== payload.cartProductAmount.productID
          );
        }
      });
    }
    case CartProductAmountActionTypes.CLEAR_CART:
      return [];
  }
}
