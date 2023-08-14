import { Minus, Plus, ShoppingCartSimple, Trash } from "phosphor-react";

import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { ProductCounterContainer } from "./styles";

export enum ProductCounterType {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

interface ProductCounterProps {
  productID: number;
  counterType: ProductCounterType;
}

enum OperationType {
  MINUS = "MINUS",
  PLUS = "PLUS",
}

export function ProductCounter({
  productID,
  counterType,
}: ProductCounterProps) {
  const { productAmounts, changeAmount } = useContext(ProductsContext);

  const { cartProductAmounts, addCartProductAmount, changeCartProductAmount } =
    useContext(CartContext);

  let amount = 0;

  if (productAmounts.length > 0) {
    const productAmount = productAmounts.find(
      (product) => product.productID === productID
    );

    amount = productAmount ? productAmount.amount : 0;
  }

  function operateOnProductAmounts(operationType: OperationType) {
    const newAmount =
      operationType === OperationType.PLUS
        ? amount < 99
          ? amount + 1
          : 99
        : amount > 0
        ? amount - 1
        : 0;

    changeAmount({ productID, amount: newAmount });
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
      ? addCartProductAmount({ productID, amount: amount })
      : changeCartProductAmount({ productID, amount: amount });
  }

  function handleDeleteCart() {
    changeCartProductAmount({ productID, amount: 0 });
  }

  return (
    <ProductCounterContainer>
      <span className="amount">
        <button onClick={handleMinus} className="minus">
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
        <button onClick={handlePlus} className="plus">
          <Plus size={14} />
        </button>
      </span>

      {counterType === ProductCounterType.ADD ? (
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
          Remover
        </button>
      )}
    </ProductCounterContainer>
  );
}
