import styled from "styled-components";

const StyledInputFile = styled.div`
  .form__container--input {
    display: flex;
    align-items: end;
    border: solid black 0.1rem;
    border-radius: 0.3rem;
    width: 100%;
  }

  .form__input-icon {
    height: 2rem;
    width: 2rem;
    background-image: url(src/assets/icons/cloud-computing-icon.svg);
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
    background-color: white;
    border: none;
    border-radius: 0.3rem;
  }

  label {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: bold;
  }

  #form__input-file {
    height: 2rem;
    width: auto;
    display: none;
  }

  #form__input-file {
    height: 2rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
  }

  .form__input-text {
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-align: start;
    font-size: 0.7rem;
    font-weight: 500;
  }
`;

export default StyledInputFile;
