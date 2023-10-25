import styled from "styled-components";

const StyledFormAddArtist = styled.div`
  .form-add-artist {
    min-height: 80vh;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .form__add-artist {
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    text-align: center;
  }

  label {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: bold;
    gap: 0.4rem;
  }

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

  #form__input-file {
    height: 2rem;
    width: auto;
    display: none;
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

  #form__input-select {
    height: 2rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
  }

  .form__container--input select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("src/assets/icons/plus-icon.svg") no-repeat;
    background-size: 1rem 1rem;
    background-position: right 0.3rem center;
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

  #form__input-artwork,
  #form__input-category,
  #form__input-dimensions,
  #form__input-materials,
  #form__input-artist {
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

  label {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: bold;
    gap: 0.4rem;
  }

  #form__input-textarea {
    height: 7rem;
    width: 100%;
    border: solid black 0.1rem;
    border-radius: 0.2rem;
    resize: vertical;
    overflow-y: auto;
  }

  @media screen and (min-width: 391px) {
    .form__add-artist {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto;
      row-gap: 2rem;
    }

    .form__column-one {
      display: grid;
      row-gap: 1rem;
      grid-column: 1;
    }

    .form__column-two {
      display: grid;
      row-gap: 1rem;
      grid-column: 2;
    }

    .form__button {
      grid-row: 2;
      grid-column: 1 / span 2;
    }

    label {
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: bold;
      gap: 0.4rem;
    }

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

    #form__input-file {
      height: 2rem;
      width: auto;
      display: none;
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

    #form__input-select {
      height: 2rem;
      width: 100%;
      border: none;
      border-radius: 0.2rem;
    }

    .form__container--input select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("src/assets/icons/plus-icon.svg") no-repeat;
      background-size: 1rem 1rem;
      background-position: right 0.3rem center;
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

    #form__input-artwork,
    #form__input-category,
    #form__input-dimensions,
    #form__input-materials,
    #form__input-artist {
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

export default StyledFormAddArtist;
