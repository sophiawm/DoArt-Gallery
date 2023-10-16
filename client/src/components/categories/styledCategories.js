import styled from 'styled-components';



const StyledCategories = styled.div `
.categories__container{
    height: auto;
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 1rem;
}

.categories__title{
    border: solid black 0.3rem;
    height: 4rem;
    width: 20rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    grid-column: 1/span 2;
    background-color: black;
    color: white;
    border-radius: 3rem;
}


.categories__button {
    height: 3rem;
    width: 9rem;
    justify-self: center;
    align-self: center;
    border-radius: 3rem;
    background-color: black;
    color: white;
    font-weight: bold;
    background-color: #8C8C8C;
    border: none;
}


`

export default StyledCategories;