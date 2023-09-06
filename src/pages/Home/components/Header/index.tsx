import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { GeneralHeader } from "../../../../components/GeneralHeader";
import { HeaderHomeContainer } from "./styles";
import coffeeHome from "/src/assets/coffee-home.svg";

export function HomeHeader() {
  const theme = useContext(ThemeContext);

  return (
    <HeaderHomeContainer>
      <GeneralHeader />
      <section className="banner">
        <div className="text">
          <section className="titles">
            <article className="main-title">
              Encontre o café perfeito para qualquer hora do dia
            </article>
            <article className="main-text">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </article>
          </section>
          <section className="labels">
            <section>
              <span>
                <span
                  className="label-icon-container"
                  style={{ background: theme["yellow-700"] }}
                >
                  <ShoppingCartSimple
                    size={16}
                    weight="fill"
                    color={theme.white}
                  />
                </span>
                <span className="icon-label">Compra simples e segura</span>
              </span>
              <span>
                <span
                  className="label-icon-container"
                  style={{ background: theme["yellow-500"] }}
                >
                  <Timer size={16} weight="fill" color={theme.white} />
                </span>
                <span className="icon-label">Entrega rápida e rastreada</span>
              </span>
            </section>
            <section className="bottom-labels">
              <span>
                <span
                  className="label-icon-container"
                  style={{ background: theme["gray-700"] }}
                >
                  <Package size={16} weight="fill" color={theme.white} />
                </span>
                <span className="icon-label">
                  Embalagem mantém o café intacto
                </span>
              </span>
              <span>
                <span
                  className="label-icon-container"
                  style={{ background: theme["purple-500"] }}
                >
                  <Coffee size={16} weight="fill" color={theme.white} />
                </span>
                <span className="icon-label">
                  O café chega fresquinho até você
                </span>
              </span>
            </section>
          </section>
        </div>
        <div className="coffee-image">
          <img src={coffeeHome} />
        </div>
      </section>
    </HeaderHomeContainer>
  );
}
