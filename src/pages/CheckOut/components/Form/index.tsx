import { MapPinLine } from "phosphor-react";
import { useContext } from "react";
import { FieldValues, useForm } from "react-hook-form";
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
    .max(50, "O logradouro precisa ter no máximo 50 dígitos"),
  numero: zod
    .string({
      required_error: "Informar o número é obrigatório",
    })
    .min(1, "O número precisa ter no mínimo 1 caractere")
    .max(5, "O número precisa ter no máximo 5 dígitos"),
  complemento: zod
    .string()
    .min(0)
    .max(20, "O complemento pode ter no máximo 20 caracteres"),
  bairro: zod
    .string({
      required_error: "Informar o bairro é obrigatório",
    })
    .min(1, "O bairro precisa ter no mínimo 1 caractere")
    .max(25, "O bairro precisa ter no máximo 25 dígitos"),
  cidade: zod
    .string({
      required_error: "Informar a cidade é obrigatório",
    })
    .min(3, "A cidade precisa ter no mínimo 3 caractere")
    .max(30, "A cidade precisa ter no máximo 30 caracteres"),
  uf: zod
    .string({
      required_error: "Informar o UF é obrigatório",
    })
    .min(2, "A UF precisa ter no mínimo 2 caracteres")
    .max(2, "A UF precisa ter no máximo 2 caracteres"),
});

export type AddressSchemaType = zod.infer<typeof addressFormValidationSchema>;

interface FormProps {
  onSubmit: (data: FieldValues) => void;
}

export function Form({ onSubmit }: FormProps) {
  const theme = useContext(ThemeContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(addressFormValidationSchema),
  });

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
        <form onSubmit={handleSubmit(onSubmit)} id="address-form">
          <div className="small-field">
            <input
              type="number"
              placeholder="CEP"
              {...register("cep", { maxLength: 8 })}
              maxLength={8}
            />
          </div>
          <span className="error-message">{`${
            formState.errors.cep?.message ? formState.errors.cep.message : ""
          }`}</span>
          <div>
            <input
              type="text"
              placeholder="Rua"
              {...register("rua")}
              maxLength={50}
            />
          </div>
          <span className="error-message">{`${
            formState.errors.rua?.message ? formState.errors.rua.message : ""
          }`}</span>

          <section>
            <div className="small-field">
              <input
                type="text"
                placeholder="Número"
                {...register("numero")}
                maxLength={5}
              />
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
                maxLength={20}
              />
              <span>Opcional</span>
            </div>
            <span className="error-message">{`${
              formState.errors.complemento?.message
                ? formState.errors.complemento.message
                : ""
            }`}</span>
          </section>
          <section>
            <div className="small-field">
              <input
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
                maxLength={25}
              />
            </div>
            <span className="error-message">{`${
              formState.errors.bairro?.message
                ? formState.errors.bairro.message
                : ""
            }`}</span>
            <div className="long-field">
              <input
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
                maxLength={30}
              />
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
                size={2}
                {...register("uf")}
                maxLength={2}
              />
            </div>
            <span className="error-message">{`${
              formState.errors.uf?.message ? formState.errors.uf.message : ""
            }`}</span>
          </section>
        </form>
      </section>
    </FormContainer>
  );
}
