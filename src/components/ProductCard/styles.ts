import styled from "styled-components";

export const ProductCardContainer = styled.span`
  li {
    background: ${(props) => props.theme["gray-200"]};
    padding: 0 1.25rem 0 1.25rem;
    display: flex;
    flex-direction: column;
    height: 19.4rem;
    border-radius: 6px 36px 6px 36px;
  }

  li > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li > section {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li > section > p {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.2rem;
  }

  li > footer {
    display: flex;
    height: 2.37rem;
    justify-content: space-between;
    margin-top: 2rem;
  }

  li > footer > .price {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme["gray-700"]};
  }

  li > footer > .price::before {
    content: "R$";
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #574f4d;
    margin-right: 4px;
  }
`;
