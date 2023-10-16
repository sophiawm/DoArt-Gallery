import styled from 'styled-components';


const StyledGalleryArtists = styled.div `
    .gallery-artists{
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 1rem;
    }

    .gallery__title{
        text-align: center;
        font-weight: 400;
        font-size: 2rem;
    }

    header, footer{
        height: 10vh;
        width: 100vw;
        background-color:red;
    }
`

export default StyledGalleryArtists;