import styled from 'styled-components';


const StyledUserOrder = styled.div`
    .user__title {
        text-align: center;
    }

    .user__cart {
        height: 80vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .card__image{
        height: 5rem;
        width: 5rem;
        grid-row: 1/span 3;
        object-fit: cover;
        overflow: hidden;
    }

    .card__image-container{
        height: 1rem;
        width: 1rem;
        overflow: hidden;
        object-fit: cover;
    }



    .card {
        background-color: white;
        display: grid;
        grid-template-columns: 20% 70% 10%;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        height: auto;
        width: 90%;
        box-sizing: border-box;
        padding: 1rem;
        column-gap: 0.5rem;
    }

    .card__container {
        display: grid;
        gap: 1rem; 
        place-items: center;
        
    }


    .card__product, .card__characteristics, .card__artist{
        grid-column: 2;
        width: 100%;
        
    }

    .card__container--text{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        width: 100%;
    }


    .card__price{
        grid-column: 3;
        grid-row: 1; 
        width: 100%;
        height: 100%;
    }

    .pay {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        &__total, &__price, &__shipping{
            display: flex;
            justify-content: space-between;
            align-items:c enter;
        }
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
    }

    @media screen and (min-width: 391px){
        .user__cart{
            display: grid;
            width: 100vw;
            min-height: 80vh;
            max-height: 100%;
            margin: 3rem auto;
            justify-content: center;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto auto auto auto;
            gap: 1rem;
        }

        .card__container{
            grid-row: 2/span 6;
            justify-self: center;
            grid-column: 1;
            width: 75%;
            margin: 0 auto;
            align-self: start;
        }

        .pay{
            grid-column: 2;
            grid-row: 2/span 6;
            align-self: center;
            justify-self: center;
            margin: 0 auto;
            gap: 1rem;
            font-size: 1.2rem;
            width: 90%;
        }

        .cart__title{
            grid-row: 1;
            grid-column: 1;
            align-self: end;
            width: 60%;
            margin: 0 auto;
        }

        .user__title{
            grid-row: 2;
            grid-column: 2;
        }

        .buttons__container{
            grid-row: 7;
            grid-column: 2;
            align-self: start;
            height: auto;
        }

        .total-products-text, .total-price-text, .shipping-costs-text{
            font-weight: bold;
        }

        .pay__shipping-text{
            display: flex;
            justify-content: space-between;
        }


    }


`

export default StyledUserOrder;