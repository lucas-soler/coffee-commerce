import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { AddressSchemaType } from "../CheckOut/components/Form";
import { PaymentType } from "../CheckOut/components/Payments";
import { SuccessHeader } from "./Header";
import { SuccessContainer } from "./styles";
import delivery from "/src/assets/delivery.svg";

interface OrderData extends AddressSchemaType {
  payment_method: PaymentType;
}

export function Success() {
  const theme = useContext(ThemeContext);
  const order: OrderData = JSON.parse(
    `${sessionStorage.getItem("@coffee-commerce:checkout-data-1.0.0")}`
  );

  let paymentMethodLabel = "";

  switch (order.payment_method) {
    case PaymentType.CREDITCARD:
      paymentMethodLabel = "Cartão de crédito";
      break;
    case PaymentType.DEBITCARD:
      paymentMethodLabel = "Cartão de débito";
      break;
    case PaymentType.MONEY:
      paymentMethodLabel = "Dinheiro";
      break;
    default:
      break;
  }

  return (
    <>
      <SuccessHeader />
      <SuccessContainer>
        <div className="order-confirmation">
          <h1>Uhu! Pedido confirmado!</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <section>
            <article>
              <span className="icon" id="map-icon">
                <MapPin size={16} color={theme.white} weight="fill" />
              </span>
              <span className="icon-text">
                <span>
                  Entrega em{" "}
                  <strong>
                    {order.rua}, {order.numero}
                  </strong>
                </span>
                <span>
                  {order.bairro} - {order.cidade},{order.uf}
                </span>
              </span>
            </article>
            <article>
              <span className="icon" id="timer-icon">
                <Timer size={16} color={theme.white} weight="fill" />
              </span>
              <span className="icon-text">
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </span>
            </article>
            <article>
              <span className="icon" id="currency-icon">
                <CurrencyDollar size={16} color={theme.white} />
              </span>
              <span className="icon-text">
                <span>Pagamento na entrega</span>
                <span>
                  <strong>{paymentMethodLabel}</strong>
                </span>
              </span>
            </article>
          </section>
        </div>
        <div className="delivery-image">
          <img src={delivery} />
        </div>
      </SuccessContainer>
    </>
  );
}
