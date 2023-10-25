import styled from "styled-components";

const StyledCard = styled.div`
  .cards__container {
    height: 100%;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    background-color: #fffcfc;
    gap: 2rem;
    list-style: none;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .card {
    width: 10rem;
    height: auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: center;
  }

  .card__image-container {
    grid-column: 1 / span 2;
    grid-row: 1;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    overflow: hidden;
    place-items: center;
  }

  .card__image {
    height: 10rem;
    width: 10rem;
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  .card__icon {
    height: 2rem;
    width: 1.5rem;
    text-align: center;
    grid-row: 4;
  }

  .card__price {
    grid-row: 4;
    justify-self: start;
  }

  .card__title {
    font-weight: bold;
    grid-column: 1 / span 2;
    justify-self: start;
  }

  .card__artist {
    grid-row: 3;
    justify-self: start;
  }

  @media screen and (min-width: 391px) {
    .cards__container {
      height: 100%;
      width: 95%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      background-color: #fffcfc;
      gap: 2rem;
      list-style: none;
      box-sizing: border-box;
      margin: 0 auto;
    }
  }
`;

export default StyledCard;
