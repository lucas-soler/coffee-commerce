import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  addProductAmountAction,
  changeProductAmountAction,
} from "../reducers/cart-product-amount/actions";

import { cartProductAmountReducer } from "../reducers/cart-product-amount/reducer";
import { ProductAmount } from "../reducers/product-amounts/reducer";
import { ProductsContext } from "./ProductsContext";

export interface CartProductAmount extends ProductAmount {
  price: number;
}

interface CartContextType {
  cartProductAmounts: CartProductAmount[];
  addCartProductAmount: (cartProductAmount: CartProductAmount) => void;
  changeCartProductAmount: (newCartProductAmount: CartProductAmount) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { changeAmount } = useContext(ProductsContext);

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

  function addCartProductAmount(cartProductAmount: CartProductAmount) {
    dispatch(addProductAmountAction(cartProductAmount));

    const resetAmount: ProductAmount = {
      productID: cartProductAmount.productID,
      amount: 0,
    };

    changeAmount(resetAmount);
  }

  function changeCartProductAmount(newAmount: CartProductAmount) {
    dispatch(changeProductAmountAction(newAmount));

    const resetAmount: ProductAmount = {
      productID: newAmount.productID,
      amount: 0,
    };

    changeAmount(resetAmount);
  }

  useEffect(() => {
    localStorage.setItem(
      "@coffee-commerce:cart-amounts-1.0.0",
      JSON.stringify(cartProductAmounts)
    );

    window.scroll({ top: 0, left: 0, behavior: "smooth" });
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
