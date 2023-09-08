import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartProduct } from "./components/CartProduct";
import { Form } from "./components/Form";
import { CheckOutHeader } from "./components/Header";
import { Payment } from "./components/Payments";
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
          <Form />
          <Payment />
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
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </footer>
            </section>
            <Link to="/success">
              <button>Confirmar pedido</button>
            </Link>
          </section>
        </div>
      </CheckOutContainer>
    </>
  );
}
