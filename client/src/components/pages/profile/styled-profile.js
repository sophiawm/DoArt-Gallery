import styled from 'styled-components';


const StyledProfile = styled.div `
    .form{
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        margin: 1rem auto;
    }

    .form__title{
        font-size: 1.8rem;
        text-align: center;
    }
    .form__container{
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
    }
    .form__container--inputs{
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1rem;
        border: none;
        width: 19rem;
    }

    #form__input--user, #form__input--password, #form__input--name{
        width: 100%;
        height: 2rem;
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

    .orders__title{
        display: flex;
        align-self: flex-start;
        margin-left: 1rem;
        font-size: 1.8rem;
    }

    .orders__container{
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin-left: 2rem;
        font-size: 1.3rem;
    }

    .buttons__container {
        display: flex;
        gap: 1rem;
        width: 100%;
        justify-content: center;
    }

    .button {
        margin-top: 3rem;
        margin-bottom: 3rem;
        height: 3rem;
        width: 10rem;
        background-color: black;
        font-size: 1rem;
        color: white;
        border-radius: 3rem;
        font-weight: bold
    }

    .orders__number{
        font-weight: 500;
    }

    .orders__status{
        font-weight: 200;
    }

    .orders__text--container::marker{
        font-size:2rem;
    }

    .form__container--input{
        display: flex;
        align-items: end;
        border: solid black 0.1rem;
        border-radius: 0.3rem;
        z-index: 2;
    }

    .product__button-pencil{
        height: 2rem;
        width: 2rem;
        background-image: url(src/assets/icons/pencil-icon.svg);
        background-position: center;
        background-size: center;
        background-repeat: no-repeat;
        background-color: white;
        border: none;
        border-radius: 0.3rem;
    }

    @media screen and (min-width: 391px){

        .form{
            display: grid;
            grid-template-columns: 70% 30%;
            grid-template-rows: auto 60% auto;
            margin: 2rem 0;
        }


        .form__title{
            grid-column: 1/ span 2;
            grid-row: 1;

        }

        .form__container{
            grid-column: 1;
            width: 100%;
        }

        .form__container--inputs{
            width: 50%;
        }

        

        .orders__title{
            grid-column: 2;
            grid-row:2;
        }

        .orders__container{
            grid-column: 2;
            grid-row:2;
            align-self: center;
        }

        .buttons__container{
            align-self: start;
        }

        .button{
            width: 13rem;
            align-self: start;
            margin: 0;
        }

  


    }

`

export default StyledProfile;