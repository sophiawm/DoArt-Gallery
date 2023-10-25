import styled from "styled-components";

const StyledHeaderLoginAdmin = styled.div`
  .header-desktop {
    display: none;
  }
  .header {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    margin-left: 1rem;
  }

  .icons-container {
    width: 30%;
    display: flex;
    justify-content: space-around;
    margin-right: 1rem;
  }

  .dropdown__container {
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    position: absolute;
    top: 0;
    flex-direction: column;
    display: none;
  }

  .categories__container {
    list-style: none;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.3rem;
    margin-left: 1rem;
    display: none;
  }

  .dropdown__Home {
    cursor: pointer;
  }

  .dropdown__Categories {
    cursor: pointer;
  }

  .dropdown__About-Us {
    cursor: pointer;
  }

  .dropdown__Your-Profile {
    cursor: pointer;
  }

  .icon-container {
    align-self: end;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  .dropdown__text-container {
    height: 10rem;
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 4.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
  }

  .dropdown__image-container {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
  }

  @media screen and (min-width: 391px) {
    .search__container {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 0 auto;
    }

    #search__input {
      width: 19rem;
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

    .header {
      display: none;
    }

    .header-desktop {
      display: flex;
      width: 100vw;
      height: 10vh;
      justify-content: space-between;
    }

    .header__logo {
      height: 80%;
      align-self: center;
    }

    .header__container {
      display: flex;
      gap: 4rem;
      font-size: 1rem;
      align-items: center;
      justify-content: space-around;
      width: 62%;
    }
  }
`;

export default StyledHeaderLoginAdmin;
