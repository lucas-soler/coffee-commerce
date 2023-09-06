import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartProduct } from "./CartProduct";
import { CheckOutHeader } from "./Header";
import { CheckOutContainer } from "./styles";

export function CheckOut() {
  const { cartProductAmounts } = useContext(CartContext);

  return (
    <>
      <CheckOutHeader />
      <CheckOutContainer>
        <div className="registerForm">
          <h1>Complete seu pedido</h1>
        </div>
        <div className="checkOutCart">
          <h1>Cafés selecionados</h1>
          <section className="productsList">
            {cartProductAmounts.map((cartProduct) => {
              return (
                <CartProduct
                  key={`cart-product-${cartProduct.productID}`}
                  productID={cartProduct.productID}
                  amount={cartProduct.amount}
                />
              );
            })}
          </section>
        </div>
      </CheckOutContainer>
    </>
  );
}
