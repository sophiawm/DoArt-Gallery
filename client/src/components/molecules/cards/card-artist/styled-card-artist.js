import styled from 'styled-components';


const StyledCardArtist = styled.div `

    .card__container {


        height: 100%;
        width: 95%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        background-color: #fffcfc;
        gap: 1rem;
        list-style: none;
        box-sizing: border-box;
        margin: 0 auto;
    }

    .card{
        display: flex;
        gap: 1rem;
        height: auto;
        width: 23rem;
        padding: 1rem;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;

    }

    .card__image {
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
        overflow: hidden;
    }

    .card__image-container{
        display: grid;
        place-content: center;
    }

    .card__text-container{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .card__artist{
        font-weight: bold;
        font-size: 1.5rem;
    }


`


export default StyledCardArtist;