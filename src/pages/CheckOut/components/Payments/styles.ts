import styled from "styled-components";

export const PaymentContainer = styled.div`
  flex: 1;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme["gray-200"]};
  font-family: "Roboto", sans-serif;

  header {
    flex: 1;
    display: flex;
    gap: 0.5rem;

    > section {
      > p {
        line-height: 130%;

        :nth-child(1) {
          font-size: 1rem;
          color: ${(props) => props.theme["gray-800"]};
        }

        :nth-child(2) {
          font-size: 0.875rem;
          color: ${(props) => props.theme["gray-700"]};
        }
      }
    }
  }

  > section {
    display: flex;
    gap: 0.75rem;

    > button {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      gap: 0.75rem;
      border-radius: 6px;
      background: ${(props) => props.theme["gray-400"]};
      border: 1px solid transparent;
      color: ${(props) => props.theme["gray-700"]};
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 160%;
      text-transform: uppercase;

      :hover {
        cursor: pointer;
        background: ${(props) => props.theme["gray-500"]};
      }

      :focus {
        background: ${(props) => props.theme["purple-100"]};
        border: 1px solid ${(props) => props.theme["purple-500"]};
      }
    }
  }

  @media only screen and (max-width: 1025px) {
    > section {
      flex-direction: column;
    }
  }
`;
