import styled from 'styled-components';


const StyledLoginAdmin = styled.div `
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: blue;
    }

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

`

export default StyledLoginAdmin;