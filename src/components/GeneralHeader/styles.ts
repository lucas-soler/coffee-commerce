import styled from "styled-components";

export const GeneralHeaderContainer = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .header-locale-and-cart {
    display: flex;
    gap: 0.5rem;
  }

  .header-locale {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: #ebe5f9;
    gap: 0.25rem;
    height: 2.375rem;
  }

  .locale {
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: #4b2995;
  }

  .header-cart {
    padding: 0.5rem;
    background: #f1e9c9;
    height: 2.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
  }

  .header > img {
    height: 2.5rem;
  }

  .cart-total-amount {
    margin-top: -1.125rem;
    margin-right: -2.25rem;
    flex-shrink: 0;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    display: flex;
    color: white;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 16px;
    background: ${(props) => props.theme["yellow-700"]};
    letter-spacing: -0.72px;
  }

  .cart-icon {
    margin-top: -0.125rem;
  }
`;
