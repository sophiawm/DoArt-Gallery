import styled from "styled-components";

const StyledDashboard = styled.div`
  .dashboard {
    min-height: 80vh;
    max-height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    margin: 1rem auto;
  }

  .search__container-mobile {
    width: 95vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
  }

  #search__input {
    width: 20rem;
    height: 2rem;
  }

  .search__button--container {
    height: 2rem;
    width: 2rem;
    border: solid 0.1rem black;
    border-radius: 0.2rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #search__button {
    height: 1.3rem;
    width: 1.3rem;
    background-image: url(src/assets/icons/search-icon.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    border: none;
  }

  .product {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    width: 90%;
    gap: 3rem;
    list-style: none;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .product__title {
    text-align: center;
  }

  .product__card {
    height: auto;
    width: 22rem;
    height: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    gap: 0.5rem;
    box-sizing: border-box;
  }

  .product__artist {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
  }

  .product__button--container {
    display: flex;
    gap: 1rem;
  }

  .product__button-pencil {
    background-image: url(src/assets/icons/pencil-icon.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    background-color: white;
  }

  .product__button-x {
    background-image: url(src/assets/icons/x-icon.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    background-color: white;
  }

  .product__image {
    grid-column: 1;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .product__info {
    grid-column: 2;
    font-size: 1rem;
    box-sizing: border-box;
    width: 90%;
    box-sizing: border-box;
    height: 100%;
  }

  .card {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cardd {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20% 80%;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    justify-items: center;
    align-items: center;
  }

  .product__name {
    font-size: 1rem;
  }

  .product__characteristics,
  .product__price,
  .product__size {
    font-size: 1rem;
  }

  .product__characteristics {
    height: auto;
    width: 100%;
  }

  .dashboard__button--container {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  .dashboard__button {
    margin-top: 3rem;
    margin-bottom: 3rem;
    height: 3rem;
    width: 11rem;
    background-color: black;
    font-size: 1.2rem;
    color: white;
    border-radius: 3rem;
  }
  .button-before {
    display: none;
  }

  .button-after {
    display: none;
  }

  @media screen and (min-width: 391px) {
    .search__container-mobile {
      display: none;
    }

    .product {
      display: flex;
      width: 58vw;
      overflow: scroll;
      transition: transform 2s ease-out;
    }

    .button-before {
      width: 4rem;
      height: 2rem;
      grid-column: 1;
      grid-row: 1;
      background-color: white;
      border: none;
      font-size: 5rem;
    }

    .button-after {
      width: 4rem;
      height: 2rem;
      grid-column: 3;
      grid-row: 1;
      background-color: white;
      border: none;
      font-size: 5rem;
    }

    .card {
      transition: transform 2s ease-out;
      gap: 1rem;
    }

    .product__container {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: 1fr;
      align-items: center;
    }
  }
`;

export default StyledDashboard;
