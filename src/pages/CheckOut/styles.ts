import styles from "styled-components";

export const CheckOutContainer = styles.main`

display: flex;
padding: 4.25rem 0;
flex-direction: row;
align-items: stretch;
justify-content: space-between;
width: 100vw;
max-width: 70rem;
gap: 2rem;



h1 {
  font-family: 'Baloo 2', cursive;
  font-size: 1.12rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-800"]};
}

.registerForm {
  border: 1px solid red;
  width: 60vw;
}

.checkOutCart {
 border: 1px solid red;
 width: 40vw;
}

.productsList{
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.25rem;

}

`;
