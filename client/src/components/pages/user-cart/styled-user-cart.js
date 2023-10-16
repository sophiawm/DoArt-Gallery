import styled from 'styled-components';


const StyledUserCart = styled.div`
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: green;
    }

    .user__title {
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
    }

    .user__cart {
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
        margin-top: 1rem;
    }

    

    .buttons__container {
        display: flex;
        gap: 1rem;
        width: 100vw;
        height: 6rem;
        justify-content: center;
    }

`

export default StyledUserCart;