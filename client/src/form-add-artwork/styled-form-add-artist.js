import styled from 'styled-components';

const StyledFormAddArtist = styled.div`

    header, footer{
        height: 10vh;
        width: 100vw;
        background-color: red;
    }

    .form-add-artist{
        min-height: 80vh;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }


    .form__add-artist{
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        gap: 1rem;
        text-align: center;

    }

   

`


export default StyledFormAddArtist;