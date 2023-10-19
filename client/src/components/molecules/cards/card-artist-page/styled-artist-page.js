import styled from 'styled-components';


const StyledCardArtistPage = styled.div `
    .card-artist-page{
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 2rem;
    }

    .artist__image-container{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .artist__image{
        width: 10rem;
        height: 10rem;
    }

    .artist__name{
        font-size: 2rem;
        font-weight: 600;
    }

    .artist__type{
        font-size: 1.3rem;
        font-weight: 600;
    }

    .artist__categories{
        font-size: 1rem;
        font-weight: 300;
        width: 58%;
    }

    .artist__biography{
        font-size: 1rem;
        font-weight: 300;
        width: 60%;
    }

    .bold{
        font-weight: 500;
    }

    @media screen and (min-width: 391px){
        .card-artist-page{
            height: 100%;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 1rem;   
        }

        .artist__image-container{
            grid-column: 1;
            grid-row: 1/span 5;
            display: flex;
            align-self: center;
            margin:0 auto;
            width: 15rem;
            height: 15rem;
            border-radius: 35%;
        }

        .artist__image{
            width: 15rem;
            height: 15rem;
        }

        .artist__name,.artist__type,.artist__biography,.artist__categories{
            grid-column: 2;
            text-align: start;
        }

        .artist__biography{
            width: 90%;
        }


    }


`

export default StyledCardArtistPage;