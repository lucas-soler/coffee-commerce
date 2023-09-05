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

  function addCartProductAmount(productAmount: ProductAmount) {
    dispatch(addProductAmountAction(productAmount));

    const resetAmount: ProductAmount = {
      productID: productAmount.productID,
      amount: 0,
    };

    changeAmount(resetAmount);
  }

  function changeCartProductAmount(newAmount: ProductAmount) {
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
