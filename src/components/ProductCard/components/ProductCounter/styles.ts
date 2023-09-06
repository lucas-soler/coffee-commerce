export const ProductCounterContainer = styled.span`
  display: flex;
  gap: 0.5rem;

  .amount {
    width: 4.5rem;
    display: flex;
    background: ${(props) => props.theme["gray-400"]};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
  }

  .amount > input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    width: 2.2rem;
    border-radius: 6px;
  }

  .amount > input[type="number"]::-webkit-inner-spin-button,
  .amount > input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .amount > button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    position: relative;
  }

  .amount > input[type="number"] {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1rem;
    text-align: center;
    background: ${(props) => props.theme["gray-400"]};
  }

  .shopping-cart-button {
    width: 2.37rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme["purple-700"]};
  }

  .shopping-cart-button:hover {
    cursor: pointer;
    background: ${(props) => props.theme["purple-500"]};
  }

  .shopping-cart-remove-button {
    display: flex;
    height: 2rem;
    font-size: 0.7rem;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;
    background: ${(props) => props.theme["gray-400"]};
  }

  .shopping-cart-remove-button:hover {
    cursor: pointer;
    background: ${(props) => props.theme["gray-500"]};
  }

  .minus-plus {
    color: ${(props) => props.theme["purple-500"]};
  }

  .minus-plus:hover {
    color: ${(props) => props.theme["purple-700"]};
  }
`;
