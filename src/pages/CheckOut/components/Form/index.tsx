import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FormContainer } from "./styles";

export function Form() {
  const theme = useContext(ThemeContext);

  return (
    <FormContainer>
      <header>
        <MapPinLine size={22} color={theme["yellow-700"]} />
        <section>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </section>
      </header>
      <section>
        <form>
          <div className="small-field">
            <input type="text" name="cep" placeholder="CEP" />
          </div>
          <div>
            <input type="text" name="rua" placeholder="Rua" />
          </div>
          <section>
            <div className="small-field">
              <input type="text" name="numero" placeholder="Número" />
            </div>
            <div className="long-field">
              <input type="text" name="complemento" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
          </section>
          <section>
            <div className="small-field">
              <input type="text" name="bairro" placeholder="Bairro" />
            </div>

            <div className="long-field">
              <input type="text" name="cidade" placeholder="Cidade" />
            </div>

            <div>
              <input type="text" name="uf" placeholder="UF" size={4} />
            </div>
          </section>
        </form>
      </section>
    </FormContainer>
  );
}
