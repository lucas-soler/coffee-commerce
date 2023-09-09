import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "styled-components";
import { FormContainer } from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const addressFormValidationSchema = zod.object({
  cep: zod
    .string({
      required_error: "Informar o CEP é obrigatório",
    })
    .min(8, "O CEP precisa ter 8 dígitos")
    .max(8, "O CEP precisa ter 8 dígitos"),
  rua: zod
    .string({
      required_error: "Informar o logradouro é obrigatório",
    })
    .min(3, "O logradouro precisa ter no mínimo 3 caracteres")
    .max(30, "O logradouro precisa ter no máximo 30 dígitos"),
});

export function Form() {
  const theme = useContext(ThemeContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(addressFormValidationSchema),
  });

  function handleInformAddress(data: any) {
    console.log(data);
  }

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
        <form onSubmit={handleSubmit(handleInformAddress)} id="address-form">
          <div className="small-field">
            <input
              type="number"
              placeholder="CEP"
              {...register("cep")}
              maxLength={8}
            />
          </div>
          <span className="error-message">{`${
            formState.errors.cep?.message ? formState.errors.cep.message : ""
          }`}</span>
          <div>
            <input type="text" placeholder="Rua" {...register("rua")} />
          </div>
          <span className="error-message">{`${
            formState.errors.rua?.message ? formState.errors.rua.message : ""
          }`}</span>

          <section>
            <div className="small-field">
              <input type="text" placeholder="Número" {...register("numero")} />
            </div>
            <span className="error-message">{`${
              formState.errors.numero?.message
                ? formState.errors.numero.message
                : ""
            }`}</span>
            <div className="long-field">
              <input
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
              />
              <span>Opcional</span>
            </div>
            <span className="error-message">{`${
              formState.errors.complemento?.message
                ? formState.errors.complemento.message
                : ""
            }`}</span>{" "}
          </section>
          <section>
            <div className="small-field">
              <input type="text" placeholder="Bairro" {...register("bairro")} />
            </div>
            <span className="error-message">{`${
              formState.errors.bairro?.message
                ? formState.errors.bairro.message
                : ""
            }`}</span>
            <div className="long-field">
              <input type="text" placeholder="Cidade" {...register("cidade")} />
            </div>
            <span className="error-message">{`${
              formState.errors.cidade?.message
                ? formState.errors.cidade.message
                : ""
            }`}</span>
            <div>
              <input
                type="text"
                placeholder="UF"
                size={4}
                {...register("uf")}
              />
            </div>
            <span className="error-message">{`${
              formState.errors.uf?.message ? formState.errors.uf.message : ""
            }`}</span>{" "}
          </section>
        </form>
      </section>
    </FormContainer>
  );
}
