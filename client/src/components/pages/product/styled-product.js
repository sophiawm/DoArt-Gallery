import styled from 'styled-components';


const StyledProduct = styled.div`
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: green;
    }

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

    .product__info-container{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 90%;
        font-weight: 200;
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
`

export default StyledProduct;