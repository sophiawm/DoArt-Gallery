import styled from 'styled-components';


const StyledGalleryArtists = styled.div `
    .gallery-artists{
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 3rem auto;
    }

    .gallery__title{
        text-align: center;
        font-weight: 400;
        font-size: 2rem;
    }

`

export default StyledGalleryArtists;