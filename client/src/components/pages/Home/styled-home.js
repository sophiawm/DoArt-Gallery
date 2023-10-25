import styled from "styled-components";

const StyledHome = styled.main`
  .home {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .image__container {
    background-image: url(src/assets/pages/main-banner.svg);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    height: 25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .image__title {
      color: white;
      font-size: 2rem;
      text-align: center;
      width: 70%;
    }

    .image__text {
      color: white;
      font-size: 2rem;
      text-align: center;
    }

    .image__button {
      height: 5rem;
      width: 18rem;
      color: white;
      border-radius: 3rem;
      background-color: black;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    gap: 2rem;
    justify-content: center;
    margin: 0 auto;
    &__title {
      text-align: center;
      font-size: 3rem;
      font-weight: 200;
    }
  }

  .carousel {
    &__title {
      text-align: center;
      font-size: 3rem;
      font-weight: 200;
    }
  }

  .categories {
    &__section {
    }
  }
  @media screen and (min-width: 391px) {
    .carousel__title {
      font-size: 2rem;
      margin: 2rem auto;
      font-weight: 400;
    }

    .main__title {
      width: 100%;
    }
  }
`;

export default StyledHome;
