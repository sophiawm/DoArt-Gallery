import styled from 'styled-components';


const StyledUserOrder = styled.div`
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: green;
    }

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


`

export default StyledUserOrder;