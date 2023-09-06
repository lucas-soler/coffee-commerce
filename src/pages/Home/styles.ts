import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["gray-800"]};
  }

  ul {
    padding: 0 0 10rem;
    margin: 0;
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, 16rem);
    justify-content: center;
  }
`;
