import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { PaymentContainer } from "./styles";

export function Payment() {
  const theme = useContext(ThemeContext);

  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} color={theme["purple-500"]} />
        <section>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </section>
      </header>
      <section>
        <button>
          <CreditCard size={16} color={theme["purple-500"]} />
          <span>Cartão de crédito</span>
        </button>
        <button>
          <Bank size={16} color={theme["purple-500"]} />
          <span>Cartão de débito</span>
        </button>
        <button>
          <Money size={16} color={theme["purple-500"]} />
          <span>Dinheiro</span>
        </button>
      </section>
    </PaymentContainer>
  );
}
