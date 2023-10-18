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
        gap: 1rem;
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


`

export default StyledCardArtistPage;