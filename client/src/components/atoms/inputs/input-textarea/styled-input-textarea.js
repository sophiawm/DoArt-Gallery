import styled from "styled-components";

const StyledInputTextarea = styled.div`
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
  }

  #form__input-textarea {
    height: 10rem;
    width: 100%;
    border: none;
    border-radius: 0.2rem;
    resize: vertical;
    overflow-y: auto;
  }
`

export default StyledInputTextarea;
