import { ProductAmount } from "./reducer";

interface ProductAmountsActionPayload {
  productAmounts: ProductAmount[];
}

export interface ProductAmountsActionType {
  type: ProductAmountsActionTypes;
  payload: ProductAmountsActionPayload;
}
export enum ProductAmountsActionTypes {
  INIT_AMOUNTS = "INIT_AMOUNTS",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
}

export function initAmountsAction(productAmounts: ProductAmount[]) {
  return {
    type: ProductAmountsActionTypes.INIT_AMOUNTS,
    payload: {
      productAmounts,
    },
  };
}

export function changeAmountAction(newAmount: ProductAmount) {
  return {
    type: ProductAmountsActionTypes.CHANGE_AMOUNT,
    payload: {
      productAmounts: [newAmount],
    },
  };
}
