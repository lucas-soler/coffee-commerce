import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem 0;
  margin-top: 4rem;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-700"]};
    line-height: 130%;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }

  .order-confirmation {
    width: 60vw;
    height: 400px;

    > section {
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      border-radius: 6px 36px 6px 36px;
      background: linear-gradient(
            ${(props) => props.theme["gray-100"]},
            ${(props) => props.theme["gray-100"]}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme["yellow-500"]},
            ${(props) => props.theme["purple-500"]}
          )
          border-box;
      border: 1px solid transparent;
      gap: 2rem;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      > article {
        display: flex;
        gap: 0.75rem;
      }

      .icon {
        display: flex;
        padding: 0.5rem;
        border-radius: 16px;
        align-items: center;
        align-self: flex-start;
      }

      #map-icon {
        background-color: ${(props) => props.theme["purple-500"]};
      }

      #timer-icon {
        background-color: ${(props) => props.theme["yellow-500"]};
      }

      #currency-icon {
        background-color: ${(props) => props.theme["yellow-700"]};
      }

      .icon-text {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
      }
    }
  }

  .delivery-image {
    width: 40vw;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-sart;

    .products-list {
      padding: 1rem;
    }

    .order-confirmation {
      width: 100%;
    }

    .delivery-image {
      width: 100%;
    }
  }
`;
