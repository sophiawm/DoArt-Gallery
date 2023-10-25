import styled from "styled-components";

const StyledCarousel = styled.div`
  .contenedor {
    height: auto;
    width: 15rem;
    margin: 3rem auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: 15rem 15rem 15rem;
    grid-template-rows: 1fr;
    grid-column: 2;
    grid-row: 1;
  }

  .contenedor__carrusel {
    height: auto;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    border: none;
    transition: transform 2s ease-out;
  }

  .contenedor__img {
    height: 14.8rem;
    width: 14.8rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 50%;
  }

  .img {
    height: 16rem;
    width: 16rem;
  }

  .artist {
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 1.9rem;
  }

  .typeart {
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 0.9rem;
  }

  .biografia {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .categorias {
    width: 100%;
    height: auto;
  }

  .boton {
    width: 100%;
    height: 2rem;
  }

  .boton-antes{
    width: 4rem;
    height: 2rem;
    grid-column: 1;
    grid-row: 1;
    background-color: white; 
    border: none;
    font-size: 5rem;
    margin-bottom: 10rem;
  }

  .boton-despues{
    width: 4rem;
    height: 2rem;
    grid-column: 3;
    grid-row: 1;
    background-color: white; 
    border: none;
    font-size: 5rem;
    margin-bottom: 10rem;
  }


  .container__carousel{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
  }

  .carousel-desktop{
    display: none;
  }

  @media screen and (min-width: 391px){
    .contenedor, .boton-despues, .boton-antes{
      display: none; 
    }
  
    .carousel-desktop{
      display: block;
      width: 100%;
      text-align: center;
    }
    .carusels__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      box-sizing: border-box;
      justify-content: center;
      margin: 0 auto;
      gap: 1rem;
    }
  
    .carousel__container{
      width: 100%;
      hegiht: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      gap: 1rem;
    }
  
    .carousel__img-container{
      height: 15rem;
      width: 15rem;
      border-radius: 50%;
      overflow: hidden; 
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover; 
      align-self: center;
      justify-self: center;
    }
  
    .carousel__img{
      height: 15rem;
      width: 15rem;
    }
  
    .carousel__biography{
      width: 15rem;
      height: auto;
      text-wrap: wrap;
      margin: 0 auto;
      text-align: center;
    }
  
    .carousel__button{
      margin: 0 auto;
    }
  
    .carousel__artist{
      font-size: 1.3rem;
      font-weight: 800;
      text-align: center;
    }
  
    .carousel__typeArt{
      font-weight: 600;
      text-align: center;
    }



`;

export default StyledCarousel;
