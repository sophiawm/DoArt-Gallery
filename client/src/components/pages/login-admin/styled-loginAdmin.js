import styled from 'styled-components';


const StyledLoginAdmin = styled.div `

    .form{
        height: 80vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &__title{
            font-size: 2.2rem;
            text-align: center;
        }
        &__container{
            height: 50vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 0 auto;
        }
        &__container--inputs{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 3rem;
            border: none;
            width: 85%;
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
            gap: 0.5rem;
          }
        
          #form__input-user, #form__input-password {
            height: 2rem;
            width: 100%;
            border: none;
            border-radius: 0.2rem;
          }

        @media screen and (min-width: 391px){
            .form__container--inputs{
                width: 40%;
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
                gap: 0.5rem;
              }
            
              #form__input-user, #form__input-password {
                height: 2rem;
                width: 100%;
                border: none;
                border-radius: 0.2rem;
              }

        }

`

export default StyledLoginAdmin;