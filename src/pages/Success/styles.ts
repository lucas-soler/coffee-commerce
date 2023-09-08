import styled from "styled-components";

export const SuccessContainer = styled.main`
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

  .order-confirmation {
    width: 60vw;
    height: 400px;
    border: 1px solid red;
  }

  .delivery-image {
    border: 1px solid red;
    width: 40vw;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-sart;

    .products-list {
      padding: 1rem;
    }

    .order-confirmation {
      width: 100%;
    }

    .delivery-image {
      width: 100%;
    }
  }
`;
