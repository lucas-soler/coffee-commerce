import styles from "styled-components";

export const ProductCounterContainer = styles.span`
  
display: flex;
gap: 0.5rem;

.amount {
  width: 4.5rem;
  display: flex;
  background: #ebe5f9;
  border-radius: 6px;
  justify-content: center;

}

.amount > input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  width: 2.2rem;
  border-radius: 6px;

}

.amount > input[type=number]::-webkit-inner-spin-button,
.amount > input[type=number]::-webkit-outer-spin-button {
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


.amount > input[type=number] {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #272221;  
  font-size: 1rem;
  padding: .5rem;
  font-weight: bold;
  text-align: center;
  background: #ebe5f9;
}


.shopping-cart-button{
  width: 2.37rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-700"]};
}

.shopping-cart-button:hover{
  cursor: pointer;
  background: ${(props) => props.theme["purple-500"]};
}

.shopping-cart-button:disabled{
  cursor: pointer;
  background: ${(props) => props.theme["purple-700"]};
}

.shopping-cart-remove-button{
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  background: ${(props) => props.theme["gray-400"]};
}

.shopping-cart-button:hover{
  cursor: pointer;
  background: ${(props) => props.theme["gray-800"]};
}



`;
