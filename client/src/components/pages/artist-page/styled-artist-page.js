import styled from 'styled-components';


const StyledArtistPage = styled.div `
    header, footer{
        width: 100vw;
        height: 10vh;
        background-color: red;
    }

    .artist-page{
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .page__title{
        text-align: center;
    }
`

export default StyledArtistPage;