import styled from "styled-components";

export const HeaderHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .banner {
    display: flex;
    padding: 4rem 0 1rem 0;
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    gap: 3.5rem;
  }

  @media only screen and (max-width: 1025px) {
    .coffee-image {
      display: none;
    }

    .banner {
      padding: 1.5rem 0 1rem 0;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .titles {
    gap: 1rem;
  }

  .text > section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .main-title {
    font-family: "Baloo 2", cursive;
    line-height: 130%;
    font-size: 3rem;
    font-weight: 800;
  }

  .main-text {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .labels {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .labels > section {
    width: 100%;
    display: flex;
    flex: 1;
  }

  .labels > section > span {
    display: flex;
    flex: 1;
    gap: 0.75rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .bottom-labels {
    align-items: flex-start;
  }

  .icon-label {
    flex: 1;
    align-items: flex-start;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #574f4d;
  }

  .label-icon-container {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 16px;
  }

  .banner > coffee-image > img {
    width: 30rem;
    height: 22.5rem;
  }
`;
