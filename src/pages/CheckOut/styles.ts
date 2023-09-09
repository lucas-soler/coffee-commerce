import styled from "styled-components";

export const CheckOutContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem 0;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 1.12rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-800"]};
  }

  > div {
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
  }

  .register-form {
    width: 60vw;
    align-self: flex-start;
  }

  .check-out-cart {
    width: 40vw;
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
  }

  #order-button {
    display: flex;
    cursor: pointer;
    flex: 1;
    justify-content: center;
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

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;

      :hover {
        background-color: ${(props) => props.theme["yellow-500"]};
      }
    }
  }

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-sart;

    .products-list {
      padding: 1rem;
    }

    .register-form {
      width: 100%;
    }

    .check-out-cart {
      width: 100%;
    }
  }
`;
