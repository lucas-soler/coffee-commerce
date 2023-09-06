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
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  .price {
    align-self: stretch;
    justify-content: center;
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};
  }
`;
