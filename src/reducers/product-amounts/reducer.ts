import { ProductAmountsActionType, ProductAmountsActionTypes } from "./actions";

import { produce } from "immer";

export interface ProductAmount {
  productID: number;
  amount: number;
}

export function productAmountsReducer(
  state: ProductAmount[],
  action: ProductAmountsActionType
) {
  const { type, payload } = action;

  switch (type) {
    case ProductAmountsActionTypes.INIT_AMOUNTS:
      return produce(state, (draft) => {
        draft.push(...payload.productAmounts);
      });
    case ProductAmountsActionTypes.CHANGE_AMOUNT: {
      const productIndex = state.findIndex(
        (productAmount) =>
          productAmount.productID === payload.productAmounts[0].productID
      );

      return produce(state, (draft) => {
        draft[productIndex] = payload.productAmounts[0];
      });
    }
  }
}
