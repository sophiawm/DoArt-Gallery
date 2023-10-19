import styled from 'styled-components';


const StyledUserCart = styled.div`
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

    @media screen and (min-width: 391px){
        .user__cart{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto 1fr 1fr;
        }

        .user__title{
            grid-row: 1;
            grid-column: 1/span 2; 
        }

        .cart{
            grid-row: 2/span 3;
            display: flex;
            width: 100%;
        }

        .pay__cart{
            grid-row: 2;
            grid-column: 2;
            align-self: end;
            margin-bottom: 2rem;
        }

        .buttons__container{
            grid-row: 3;
            grid-column: 2;
            width: 100%;
        }
    }

`

export default StyledUserCart;