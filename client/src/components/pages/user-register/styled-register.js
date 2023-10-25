import styled from "styled-components";

const StyledRegister = styled.div`
  .form {
    min-height: 80vh;
    max-height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }

  .form__title {
    font-size: 2.8rem;
    text-align: center;
    font-weight: 300;
    width: 70%;
    margin: 0 auto;
  }
  .form__container {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    gap: 5rem;
  }
  .form__container--inputs {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
    border: none;
    width: 100%;
    margin: 0 auto;
  }

  label {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: bold;
    gap: 0.5rem;
  }

  #form__input-email,
  #form__input-password,
  #form__input-name {
    height: 2rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
  }

  .form__container--input {
    display: flex;
    align-items: end;
    border: solid black 0.1rem;
    border-radius: 0.3rem;
    width: 100%;
  }

  @media screen and (min-width: 391px) {
    .form {
      margin: 3rem 0;
    }

    .form__container--inputs {
      width: 50%;
    }

    label {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: bold;
      gap: 0.5rem;
    }

    #form__input-email,
    #form__input-password,
    #form__input-name {
      height: 2rem;
      width: 100%;
      border: none;
      border-radius: 0.2rem;
    }

    .form__container--input {
      display: flex;
      align-items: end;
      border: solid black 0.1rem;
      border-radius: 0.3rem;
      width: 100%;
    }
  }
`;

export default StyledRegister;
