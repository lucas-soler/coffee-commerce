import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { GeneralHeaderContainer } from "./styles";
import logo from "/src/assets/logo.svg";

export const GeneralHeader = memo(() => {
  const { cartProductAmounts } = useContext(CartContext);

  return (
    <GeneralHeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="headerLocaleAndCart">
        <span className="headerLocale">
          <span>
            <MapPin size={22} weight="fill" color="#8047F8" />
          </span>
          <span className="locale">Porto Alegre, RS</span>
        </span>
        <Link to="/checkout">
          <span className="headerCart">
            <span className="cartTotalAmount">
              {cartProductAmounts.reduce(
                (total, productAmount) => total + productAmount.amount,
                0
              )}
            </span>
            <span>
              <ShoppingCartSimple
                className="cartIcon"
                size={22}
                weight="fill"
                color="#C47F17"
              />
            </span>
          </span>
        </Link>
      </div>
    </GeneralHeaderContainer>
  );
});
