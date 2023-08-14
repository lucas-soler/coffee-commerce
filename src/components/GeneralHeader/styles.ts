import styles from "styled-components";

export const GeneralHeaderContainer = styles.section`
display: flex;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;

.headerLocaleAndCart {
  display: flex;
  gap: 0.5rem;
}

.headerLocale{
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: #EBE5F9;
  gap: 0.25rem;
}

.locale{
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #4B2995;
}

.headerCart {
  padding: 0.5rem;
  background: #F1E9C9;
  height: 2.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
}

.header > img{
  height: 2.5rem;
}

.cartTotalAmount {
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
  background: #c47f17;
  letter-spacing: -0.72px;
}

.cartIcon{
  margin-top: -0.125rem;
}

`;
