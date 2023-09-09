import styled from "styled-components";

export const FormContainer = styled.div`
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

  section {
    flex: 1;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        border-radius: 4px;
        background-color: ${(props) => props.theme["gray-300"]};
        border: 1px solid ${(props) => props.theme["gray-400"]};

        :focus-within {
          border: 1px solid ${(props) => props.theme["yellow-700"]};
        }
      }

      input {
        flex: 1;
        color: ${(props) => props.theme["gray-600"]};
        font-size: 0.875rem;
        background-color: ${(props) => props.theme["gray-300"]};

        :focus {
          color: ${(props) => props.theme["gray-700"]};
        }
      }

      > section {
        gap: 1rem;
        display: flex;
        flex-direction: column;

        > div > span {
          font-style: italic;
          font-size: 0.75rem;
          color: ${(props) => props.theme["gray-600"]};
        }
      }
    }

    .error-message {
      font-size: 0.77rem;
      color: ${(props) => props.theme.red};
    }
  }

  @media only screen and (min-width: 1025px) {
    section {
      form {
        .small-field {
          width: 35%;
        }

        > section {
          display: flex;
          flex-direction: row;
          gap: 0.75rem;

          .long-field {
            flex: 1;
          }
        }
      }
    }
  }
`;
