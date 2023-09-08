import { SuccessHeader } from "./Header";
import { SuccessContainer } from "./styles";
import delivery from "/src/assets/delivery.svg";

export function Success() {
  return (
    <>
      <SuccessHeader />
      <SuccessContainer>
        <div className="order-confirmation">
          <h1>Uhu! Pedido confirmado!</h1>
        </div>
        <div className="delivery-image">
          <img src={delivery} />
        </div>
      </SuccessContainer>
    </>
  );
}
