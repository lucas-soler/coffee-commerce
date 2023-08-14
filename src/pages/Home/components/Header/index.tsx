import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { GeneralHeader } from "../../../../components/GeneralHeader";
import { HeaderHomeContainer } from "./styles";
import coffeeHome from "/src/assets/coffee-home.svg";

export function HomeHeader() {
  return (
    <HeaderHomeContainer>
      <GeneralHeader />
      <section className="banner">
        <div className="text">
          <section className="titles">
            <article className="mainTitle">
              Encontre o café perfeito para qualquer hora do dia
            </article>
            <article className="mainText">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </article>
          </section>
          <section className="labels">
            <section>
              <span>
                <span
                  className="labelIconContainer"
                  style={{ background: "#C47F17" }}
                >
                  <ShoppingCartSimple size={16} weight="fill" color="white" />
                </span>
                <span className="iconLabel">Compra simples e segura</span>
              </span>
              <span>
                <span
                  className="labelIconContainer"
                  style={{ background: "#DBAC2C" }}
                >
                  <Timer size={16} weight="fill" color="white" />
                </span>
                <span className="iconLabel">Entrega rápida e rastreada</span>
              </span>
            </section>
            <section className="bottomLabels">
              <span>
                <span
                  className="labelIconContainer"
                  style={{ background: "#574F4D" }}
                >
                  <Package size={16} weight="fill" color="white" />
                </span>
                <span className="iconLabel">
                  Embalagem mantém o café intacto
                </span>
              </span>
              <span>
                <span
                  className="labelIconContainer"
                  style={{ background: "#8047F8" }}
                >
                  <Coffee size={16} weight="fill" color="white" />
                </span>
                <span className="iconLabel">
                  O café chega fresquinho até você
                </span>
              </span>
            </section>
          </section>
        </div>
        <div className="coffeeImage">
          <img src={coffeeHome} />
        </div>
      </section>
    </HeaderHomeContainer>
  );
}
