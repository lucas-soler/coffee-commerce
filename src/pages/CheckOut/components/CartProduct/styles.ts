import styled from "styled-components";

export const CartProductContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  background: ${(props) => props.theme["gray-200"]};

  div {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  header {
    text-transform: capitalize;
    font-family: "Roboto", cursive;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-800"]};
  }

  section {
    flex: 1;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  .price {
    align-self: stretch;
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }

  .price::before {
    content: "R$ ";
  }

  @media only screen and (max-width: 1025px) {
    section {
      align-items: center;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1365px) {
    .price::before {
      content: "";
    }
  }

  @media only screen and (max-width: 480px) {
    .price::before {
      content: "";
    }
  }
`;
