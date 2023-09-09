import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SuccessHeader } from "./Header";
import { SuccessContainer } from "./styles";
import delivery from "/src/assets/delivery.svg";

export function Success() {
  const theme = useContext(ThemeContext);

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                  <strong>Cartão de crédito</strong>
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
