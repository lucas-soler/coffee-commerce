import styles from "styled-components";

export const CartProductContainer = styles.div`

flex: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0.5rem 0.25rem;
background: #F3F2F2;

div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
}

img {
  width: 4rem;
  height: 4rem;
}

header {
  text-transform: capitalize;
  font-family: 'Baloo 2', cursive;
  font-size: 1rem;
  font-weight: 400;
  color: #403937;
}

section {
  display: flex;
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
  color: #574F4D;
}

`;
