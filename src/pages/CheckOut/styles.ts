import styled from "styled-components";

export const CheckOutContainer = styled.main`
  display: flex;
  padding: 2.5rem 0;
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
    gap: 1.5rem;

    > hr {
      border: 1px solid ${(props) => props.theme["gray-400"]};
    }

    > section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-family: "Roboto", sans-serif;

      > article {
        display: flex;
        justify-content: space-between;
        > span {
          line-height: 130%;
          :nth-child(1) {
            font-size: 0.875rem;
          }

          :nth-child(2) {
            font-size: 1rem;
          }
        }
      }

      > footer {
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
        font-weight: 700;
      }
    }

    > button {
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
      padding: 0.75rem 0.5rem;
      background-color: ${(props) => props.theme["yellow-500"]};
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 160%;

      :hover {
        cursor: pointer;
        background-color: ${(props) => props.theme["yellow-700"]};
      }
    }
  }
`;
