import { ReactNode, createContext, useEffect, useReducer } from "react";
import {
  addProductAmountAction,
  changeProductAmountAction,
} from "../reducers/cart-product-amount/actions";

import { cartProductAmountReducer } from "../reducers/cart-product-amount/reducer";
import { ProductAmount } from "../reducers/product-amounts/reducer";

interface CartContextType {
  cartProductAmounts: ProductAmount[];
  addCartProductAmount: (productAmount: ProductAmount) => void;
  changeCartProductAmount: (newProductAmount: ProductAmount) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProductAmounts, dispatch] = useReducer(
    cartProductAmountReducer,
    [],
    () => {
      const storedAmounts = localStorage.getItem(
        "@coffee-commerce:cart-amounts-1.0.0"
      );

      if (storedAmounts) {
        return JSON.parse(storedAmounts);
      }

      return [];
    }
  );

  function addCartProductAmount(productAmount: ProductAmount) {
    dispatch(addProductAmountAction(productAmount));
  }

  function changeCartProductAmount(newAmount: ProductAmount) {
    dispatch(changeProductAmountAction(newAmount));
  }

  useEffect(() => {
    localStorage.setItem(
      "@coffee-commerce:cart-amounts-1.0.0",
      JSON.stringify(cartProductAmounts)
    );
  }, [cartProductAmounts]);

  return (
    <CartContext.Provider
      value={{
        cartProductAmounts,
        addCartProductAmount,
        changeCartProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
