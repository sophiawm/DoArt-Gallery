import styled from 'styled-components';


const StyledRegister = styled.div `
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
        text-align: center;
        
        &__title{
            font-size: 2.8rem;
            text-align: center;
            font-weight: 300;
            width: 70%;
            margin: 0 auto;
        }
        &__container{
            height: 100%;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin: 0 auto;
            gap: 5rem;
        }
        &__container--inputs{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 3rem;
            border: none;
            width: 100%;
            margin: 0 auto;
        }




`

export default StyledRegister;