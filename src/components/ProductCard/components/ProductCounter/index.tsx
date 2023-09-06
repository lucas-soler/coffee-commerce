/* eslint-disable react-hooks/rules-of-hooks */
import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";

import { memo, useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { ProductCounterContainer } from "./styles";

export enum ProductCounterType {
  GENERAL = "GENERAL",
  CART = "CART",
}

interface ProductCounterProps {
  productID: number;
  amount: number;
  price: number;
  counterType: ProductCounterType;
}

enum OperationType {
  MINUS = "MINUS",
  PLUS = "PLUS",
}

export const ProductCounter = memo(
  ({ productID, amount, price, counterType }: ProductCounterProps) => {
    const changeAmount =
      counterType === ProductCounterType.GENERAL
        ? useContext(ProductsContext).changeAmount
        : useContext(CartContext).changeCartProductAmount;

    const {
      cartProductAmounts,
      addCartProductAmount,
      changeCartProductAmount,
    } = useContext(CartContext);

    function operateOnProductAmounts(operationType: OperationType) {
      const newAmount =
        operationType === OperationType.PLUS
          ? amount < 99
            ? amount + 1
            : 99
          : amount > 0
          ? amount - 1
          : 0;

      changeAmount({ productID, amount: newAmount, price });
    }

    function handleMinus() {
      operateOnProductAmounts(OperationType.MINUS);
    }

    function handlePlus() {
      operateOnProductAmounts(OperationType.PLUS);
    }

    function handleAddCart() {
      const isThereTheSame = cartProductAmounts.find(
        (productAmount) => productAmount.productID === productID
      );

      !isThereTheSame
        ? addCartProductAmount({
            productID,
            amount,
            price,
          })
        : changeCartProductAmount({ productID, amount, price });
    }

    function handleDeleteCart() {
      changeCartProductAmount({ productID, amount: 0, price });
    }

    return (
      <ProductCounterContainer
        style={{
          height:
            counterType === ProductCounterType.GENERAL ? "2.375rem" : "2rem",
        }}
      >
        <span className="amount">
          <button onClick={handleMinus} className="minus-plus">
            <Minus size={14} />
          </button>
          <input
            key={"counter-" + productID}
            className="quantity"
            min="0"
            max="99"
            name="quantity"
            value={amount}
            onChange={(e) => Number(e.target.value)}
            type="number"
            readOnly={true}
          />
          <button onClick={handlePlus} className="minus-plus">
            <Plus size={14} />
          </button>
        </span>

        {counterType === ProductCounterType.GENERAL ? (
          <button
            className="shopping-cart-button"
            onClick={handleAddCart}
            disabled={amount === 0}
            title={amount === 0 ? "Escolha uma quantidade para prosseguir" : ""}
          >
            <ShoppingCartSimple size={22} weight="fill" color="white" />
          </button>
        ) : (
          <button
            className="shopping-cart-remove-button"
            onClick={handleDeleteCart}
          >
            <Trash size={16} color="#8047F8" />
            REMOVER
          </button>
        )}
      </ProductCounterContainer>
    );
  }
);
