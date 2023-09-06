export const ProductDescriptionContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  .kind {
    text-transform: capitalize;
    margin-top: 1rem;
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: #403937;
  }

  .description {
    text-align: center;
    margin-top: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    color: #8d8686;
  }

  .description::first-letter {
    text-transform: capitalize;
  }
`;
