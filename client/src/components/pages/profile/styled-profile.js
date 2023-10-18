import styled from 'styled-components';


const StyledProfile = styled.div `
    header{
        height: 10vh;
        width: 100vw;
        background-color: blue;
    }

    footer{
        height: 10vh;
        width: 100vw;
        background-color: blue;
    }

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
        &__title{
            font-size: 1.8rem;
            text-align: center;
        }
        &__container{
            height: 100%;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
        }
        &__container--inputs{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1rem;
            border: none;
        }
    #form__input--user, #form__input--password, #form__input--name{
        width: 18rem;
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

`

export default StyledProfile;