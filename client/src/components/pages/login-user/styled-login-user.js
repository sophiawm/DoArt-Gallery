import styled from 'styled-components';


const StyledLoginUser = styled.div `
    .form{
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8rem;
        margin: 3rem auto;
        &__title{
            font-size: 2.2rem;
            text-align: center;
            font-family: comfortaa;
            font-weight: 200;
            width: 70%;
            margin: 0 auto;
        }
        &__container{
            display: flex;
            flex-direction: column;
            gap: 7rem;
            text-align: center;
        }
        &__container--inputs{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 3rem;
            border: none;
            width: 90%;
            margin: 0 auto;
        }



    .form__container--buttons{
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
    
      #form__input-email, #form__input-password {
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

    @media screen and (min-width: 391px){

        .form__container--inputs{
            width: 65%;
        }

        .form__container--buttons{
            display: flex;
            align-self: center;
            flex-direction: row;
            gap: 1rem;
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
        
          #form__input-email, #form__input-password {
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
    

`

export default StyledLoginUser;