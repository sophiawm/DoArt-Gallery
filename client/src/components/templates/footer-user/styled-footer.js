import styled from 'styled-components';


const StyledFooter = styled.div `
    .footer{
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .footer__text{
        font-size: 1rem;
        font-weight: 300;
    }

    .our-details__container{
        display: none;
    }

    .keep-in-touch__container{
        display: none;
    }

    @media screen and (min-width: 391px){
        .footer{
            background-color: #F2F2F2;
            height: 15rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-row: 1fr;
            place-items: center;
        }

        .container__image-text{
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
            gap: 1rem;
        }

        .footer__logo{
            align-self:end;
            height: 3.5rem;
        }


        .footer__text{

            align-self:start;
            font-size: 1.5rem;
            width: 10rem;
            text-align:center;
        }

        .our-details__container{
            width: 60%;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            gap: 0.5rem;
        }

        .our-details__title{
            font-size: 1.2rem;
            font-weight: 500;
        }

        .keep-in-touch__container{
            height: 100%;
            width: 60%;
            gap: 1rem;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            flex-direction: column;
        }

        .keep-in-touch__title{
            font-size: 1.2rem;
            font-weight: 500;
        }

        .keep-in-touch__icons{
            display: flex;
            gap: 0.5rem;
        }
    }

`

export default StyledFooter;