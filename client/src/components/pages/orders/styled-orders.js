import styled from 'styled-components';


const StyledOrders = styled.div `
    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: blue;
    }

    .orders{
        min-height: 80vh;
        max-height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 2rem auto;
        gap: 4rem;
    }


    .orders__title{
        text-align: center;
        margin-left: 1rem;
        font-size: 1.8rem;
    }

    .orders__container{
        display: grid;
        width: 100%;
        font-size: 1.3rem;
        margin: 0 auto;
        gap: 5rem;
        grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    }


    .orders__text--container{
        width: 19rem;
        margin: 0 auto;
    }

    .date-price{
        display: flex;
        width: 100%;
        justify-content: space-between;  
    }

    .orders__number{
        font-weight: 500;
    }

    .orders__status{
        font-weight: 200;
    }

    .orders__text--container::marker{
        font-size:2rem;
    }
   

`

export default StyledOrders;