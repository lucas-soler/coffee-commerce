import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Dispatch, SetStateAction, useContext } from "react";
import { ThemeContext } from "styled-components";
import { PaymentContainer } from "./styles";

interface PaymentProps {
  setPaymentType: Dispatch<SetStateAction<PaymentType | undefined>>;
  selectedPaymentType: PaymentType | undefined;
  formIsDone: boolean;
}

export enum PaymentType {
  CREDITCARD = "CREDITCARD",
  DEBITCARD = "DEBITCARD",
  MONEY = "MONEY",
}

export function Payment({
  setPaymentType,
  selectedPaymentType,
  formIsDone,
}: PaymentProps) {
  const theme = useContext(ThemeContext);

  function handleSelectPayment(paymentType: PaymentType) {
    setPaymentType(paymentType);
  }

  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} color={theme["purple-500"]} />
        <section>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </section>
      </header>
      {!selectedPaymentType && formIsDone ? (
        <span>É obrigatório selecionar um método de pagamento</span>
      ) : (
        ""
      )}
      <section>
        <button
          onClick={() => handleSelectPayment(PaymentType.CREDITCARD)}
          className={
            selectedPaymentType === PaymentType.CREDITCARD ? "selected" : ""
          }
        >
          <CreditCard size={16} color={theme["purple-500"]} />
          <span>Cartão de crédito</span>
        </button>
        <button
          onClick={() => handleSelectPayment(PaymentType.DEBITCARD)}
          className={
            selectedPaymentType === PaymentType.DEBITCARD ? "selected" : ""
          }
        >
          <Bank size={16} color={theme["purple-500"]} />
          <span>Cartão de débito</span>
        </button>
        <button
          onClick={() => handleSelectPayment(PaymentType.MONEY)}
          className={
            selectedPaymentType === PaymentType.MONEY ? "selected" : ""
          }
        >
          <Money size={16} color={theme["purple-500"]} />
          <span>Dinheiro</span>
        </button>
      </section>
    </PaymentContainer>
  );
}
