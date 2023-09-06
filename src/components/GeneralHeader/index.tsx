import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { CartContext } from "../../contexts/CartContext";
import { GeneralHeaderContainer } from "./styles";
import logo from "/src/assets/logo.svg";

export const GeneralHeader = memo(() => {
  const { cartProductAmounts } = useContext(CartContext);

  const theme = useContext(ThemeContext);

  return (
    <GeneralHeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="header-locale-and-cart">
        <span className="header-locale">
          <span>
            <MapPin size={22} weight="fill" color={theme["purple-500"]} />
          </span>
          <span className="locale">Porto Alegre, RS</span>
        </span>
        <Link to="/checkout">
          <span className="header-cart">
            <span className="cart-total-amount">
              {cartProductAmounts.reduce(
                (total, productAmount) => total + productAmount.amount,
                0
              )}
            </span>
            <span>
              <ShoppingCartSimple
                className="cart-icon"
                size={22}
                weight="fill"
                color={theme["yellow-700"]}
              />
            </span>
          </span>
        </Link>
      </div>
    </GeneralHeaderContainer>
  );
});
