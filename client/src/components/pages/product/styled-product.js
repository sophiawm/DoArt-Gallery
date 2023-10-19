import styled from 'styled-components';


const StyledProduct = styled.div`

    .product{
        min-height: 80vh;
        max-height: 100%;
        box-sizing: border-box;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 1rem;
    }


    .product__image-container{
        height: 15rem;
        width: 15rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .product__image{
        height: 15rem;
        width: 15rem;
        object-fit: covere;
    }

    .product__name{
        font-size: 1.5rem;
        font-weight: 700;
    }
    .product__artist{
        font-weight: 600;
    }

    .bold{
        font-weight: 500;
    }

    .product__price{
        font-weight: 700;
    }

    .product__size, .product__description, .product__materials{
        font-weight: 300;
    }


    .buttons__container {
        display: flex;
        gap: 1rem;
        width: 100%;
        height: 7rem;
        justify-content: center;
        align-items: center;
    }

    .favorite{
        background-color: grey;
    }
    
    .product__info-desktop-one{
        display: none;
    }

    .product__info-desktop-two{
        display: none;
    }

    .product__info-container{
        display: flex;
        flex-direction: column;
        width: 70%;
        gap: 1rem;
        font-size: 1.3rem;
    }

    @media screen and (min-width: 391px){
        .product{
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            margin: 4rem 0;
        }

        .product__image{
            height: 20rem;
            width: 20rem;
            object-fit: covere;
        }

        .product__artist{
            font-weight: 300;
            font-size: 1.5rem;
            position: relative;
            bottom:1.3rem;
        }

        .product__price{
            font-weight: bold;
            font-size: 1.2rem;
        }


        .product__info-container{
            display: none;
        }


        .product__image-container{
            grid-row: 1;
            grid-column: 1;
            height: 20rem;
            width: 20rem;
        }


        .buttons__container{
            grid-row: 1;
            grid-column: 2;
            position: relative;
            top: 9rem;
            justify-content: start;
        }

        .product__info-desktop-one{
            grid-row: 1;
            grid-column: 2;
            width: 80%;
            justify-self: start;
            justify-content: space-around;
            display: flex;
            flex-direction: column;
            height: 70%;
            align-self: start;
        }

        .product__info-desktop-two{
            grid-row: 2;
            grid-column: 1/span 2;
            display: flex;
            flex-direction:column-reverse;
            gap: 2rem;
            margin: 0 auto;
            width: 70%;
            font-size: 1.4rem;
        }

          


    }
`

export default StyledProduct;