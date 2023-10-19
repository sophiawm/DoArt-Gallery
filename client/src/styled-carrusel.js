import styled from 'styled-components';

const StyledCarrusel = styled.div`
  .contenedor {
    height: 40rem;
    width: 15rem;
    margin: 3rem auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: 15rem 15rem 15rem;
    grid-template-rows: 1fr;
  }

  .contenedor__carrusel {
    height: 40rem;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid black;
    transition: transform 2s ease-out;
  }

  .contenedor__img {
    height: 5rem;
    width: 5rem;
    overflow: hidden;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }

  .img {
    height: 6rem;
    width: 6rem;
  }

  .artist {
    width: 100%;
    height: auto;
  }

  .typeart {
    width: 100%;
    height: auto;
  }

  .biografia {
    width: 100%;
    height: 10rem;
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
    posicion: absolute;
    top: 10rem;
  }

  .boton-despues{
    posicion: absolute;
    width: 4rem;
    height: 2rem;
  }


`;

export default StyledCarrusel;
