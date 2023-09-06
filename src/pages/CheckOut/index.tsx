import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartProduct } from "./CartProduct";
import { CheckOutHeader } from "./Header";
import { CheckOutContainer } from "./styles";

export function CheckOut() {
  const { cartProductAmounts } = useContext(CartContext);

  const shippingPrice = 3.5;

  const totalValueItems = cartProductAmounts.reduce(
    (total, cartProductAmount) => {
      return total + cartProductAmount.amount * cartProductAmount.price;
    },
    0
  );

  const totalPrice = totalValueItems + shippingPrice;

  return (
    <>
      <CheckOutHeader />
      <CheckOutContainer>
        <div className="register-form">
          <h1>Complete seu pedido</h1>
        </div>
        <div className="check-out-cart">
          <h1>Cafés selecionados</h1>
          <section className="products-list">
            {cartProductAmounts.map((cartProduct) => {
              return (
                <div key={`cart-product-${cartProduct.productID}`}>
                  <CartProduct
                    productID={cartProduct.productID}
                    amount={cartProduct.amount}
                    price={cartProduct.price}
                  />
                  <hr />
                </div>
              );
            })}

            <section>
              <article>
                <span>Total de itens</span>
                <span>
                  {totalValueItems.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </article>
              <article>
                <span>Entrega</span>
                <span>
                  {shippingPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </article>
              <footer>
                <span>Total</span>
                <span>
                  {" "}
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </footer>
            </section>

            <button>Confirmar pedido</button>
          </section>
          teste
          <br />
          <br />
          <br />
        </div>
      </CheckOutContainer>
    </>
  );
}
