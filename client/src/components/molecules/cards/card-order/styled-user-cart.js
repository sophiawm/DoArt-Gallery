import styled from 'styled-components';


const StyledCardOrder = styled.div`

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
        height: 10rem;
        width: 22rem;
        box-sizing: border-box;
        padding: 1rem;
        column-gap: 1rem;
        &__name{
            font-weight: bold;
        }
        &__price{
            font-weight: bold;
            height: 100%;
            margin-top: 0.7rem;
        }
        &__artist{
            font-weight: 300;
            font-style: italic;
        }
    }

    .card__container {
        display: grid;
        height: 100%;
        width: 95%;
        grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
        grid-template-rows: auto;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        list-style: none;
        box-sizing: border-box;
        margin: 0 auto;
    }


    .card__product, .card__materials, .card__artist{
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

    @media screen and (min-width: 391px){
        .card{
            width: 65%;
            height: 100%;
            margin: 0 auto;
        }
    }

`

export default StyledCardOrder;