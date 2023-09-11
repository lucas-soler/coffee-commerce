import { useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartProduct } from "./components/CartProduct";
import { AddressSchemaType, Form } from "./components/Form";
import { CheckOutHeader } from "./components/Header";
import { Payment, PaymentType } from "./components/Payments";
import { CheckOutContainer } from "./styles";

export function CheckOut() {
  const navigate = useNavigate();

  const { cartProductAmounts, clearCart } = useContext(CartContext);

  const [paymentType, setPaymentType] = useState<PaymentType>();
  const [addressData, setAddressData] = useState<AddressSchemaType>();

  const shippingPrice = 3.5;

  const totalValueItems = cartProductAmounts.reduce(
    (total, cartProductAmount) => {
      return total + cartProductAmount.amount * cartProductAmount.price;
    },
    0
  );

  const totalPrice = totalValueItems + shippingPrice;

  function onSubmit(data: FieldValues) {
    const address = data as AddressSchemaType;

    if (paymentType && cartProductAmounts.length > 0) {
      sessionStorage.setItem(
        "@coffee-commerce:checkout-data-1.0.0",
        JSON.stringify({ ...address, payment_method: paymentType })
      );

      clearCart();

      navigate("/success");
    }

    setAddressData(address);
  }

  return (
    <>
      <CheckOutHeader />
      <CheckOutContainer>
        <div className="register-form">
          <h1>Complete seu pedido</h1>
          <Form onSubmit={onSubmit} />
          <Payment
            setPaymentType={setPaymentType}
            selectedPaymentType={paymentType}
            formIsDone={addressData ? true : false}
          />
        </div>
        <div className="check-out-cart">
          <h1>Cafés selecionados</h1>
          {cartProductAmounts.length === 0 ? (
            <span>
              Você deve escolher pelo menos um café para fechar o pedido
            </span>
          ) : (
            ""
          )}
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
            <button
              type="submit"
              form="address-form"
              id="order-button"
              disabled={cartProductAmounts.length === 0}
            >
              Confirmar pedido
            </button>
          </section>
        </div>
      </CheckOutContainer>
    </>
  );
}
