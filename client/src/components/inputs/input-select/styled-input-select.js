import styled from "styled-components";

const StyledInputSelect = styled.div`


  .form__container--input {
    border: solid black 0.1rem;
    border-radius: 0.3rem;
    width: 100%;
    height: 2rem;
  }


  
  #form__input-select{
    height: 100%;
    width: 100%;
    border: none; 
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

  .form__container--input select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("src/assets/icons/plus-icon.svg") no-repeat;
    background-size: 1rem 1rem;
    background-position: right 0.3rem center;
  }
`;

export default StyledInputSelect;
