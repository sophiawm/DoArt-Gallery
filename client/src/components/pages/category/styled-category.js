import styled from 'styled-components';


const StyledCategory = styled.div `
    .category {
        min-height: 80vh;
        max-height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        margin-top: 1rem;
        margin: 1rem auto;
    }

    .category__title {
        text-align: center;
        font-weight: 300;
        font-size: 2rem;
    }

    .search__container{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 0 auto;
    }

    #search__input{
        width: 19rem;
        height: 2rem;
    }

    .search__button--container{
        height: 2rem;
        width: 2rem;
        border: solid 0.1rem black;
        border-radius: 0.2rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #search__button{
        height: 1.3rem;
        width: 1.3rem;
        background-image: url(src/assets/icons/search-icon.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: white;
        border: none;
    }
`

export default StyledCategory;