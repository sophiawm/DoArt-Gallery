import { useState, useEffect } from 'react';
import StyledCarrusel from './styled-carrusel';
import { dataDoArt } from './data';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoPlay) {
        avanzarImagen();
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay]);

  const transformValue = `translateX(${-15 * currentIndex}rem)`;

  const avanzarImagen = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataDoArt.length);
    
    setAutoPlay(false);
    setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
  };

  const retrocederImagen = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataDoArt.length) % dataDoArt.length);
    // Desactivar la animación automática durante 5 segundos
    setAutoPlay(false);
    setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
  };

  return (
    <StyledCarrusel>
      <button className='boton-antes' onClick={retrocederImagen}>
        antes
      </button>
      <button className='boton-despues' onClick={avanzarImagen}>
        despues
      </button>
      <div className='contenedor'>
        {dataDoArt.map((a) => (
          <div
            key={a.artist}
            className='contenedor__carrusel'
            style={{
              transform: transformValue,
            }}
          >
            <div className='contenedor__img'>
              <img src={a.imgArtist} alt='' className='img' />
            </div>
            <h1 className='artist'>{a.artist}</h1>
            <h2 className='typeart'>{a.typeArt}</h2>
            <p className='biografia'>{a.biography}</p>
            <p className='categorias'>{a.categories}</p>
            <button className='boton'>boton</button>
          </div>
        ))}
      </div>
    </StyledCarrusel>
  );
};

export default Carrusel;

