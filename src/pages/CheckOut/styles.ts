import styled from "styled-components";

export const CheckOutContainer = styled.main`
  display: flex;
  padding: 4.25rem 0;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 100vw;
  max-width: 70rem;
  gap: 2rem;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 1.12rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-800"]};
  }

  .register-form {
    border: 1px solid red;
    width: 60vw;
  }

  .check-out-cart {
    width: 40vw;
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
  }

  .products-list {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme["gray-200"]};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid red;
    gap: 1.5rem;
  }

  .products-list > hr {
    border: 1px solid ${(props) => props.theme["gray-400"]};
  }
`;
