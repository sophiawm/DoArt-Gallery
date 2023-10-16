import styled from 'styled-components';


const StyledLoginUser = styled.div `
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
        justify-content: space-around;
        margin: 0 auto;
        &__title{
            font-size: 2.2rem;
            text-align: center;
            font-family: comfortaa;
            font-weight: 200;
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

`

export default StyledLoginUser;