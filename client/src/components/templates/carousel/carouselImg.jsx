import { useState, useEffect } from 'react';
import { dataDoArt } from '../../../data';
import ButtonSmall from '../../atoms/buttons/button-small';
import StyledCarousel from './styledCarousel';

const Carousel = () => {
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
   
    setAutoPlay(false);
    setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
  };

  return (
    <StyledCarousel>
      <div className='container__carousel'>
      <button className='boton-antes' onClick={retrocederImagen}>
      &#10216;
      </button>
      <button className='boton-despues' onClick={avanzarImagen}>
      &#10217;
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
            <ButtonSmall text={'SEE MORE'} color={'gray'} width={'9rem'}/>
          </div>
        ))}
      </div>
      </div>

       {/* desktop version */}

       <div className="carousel-desktop">
        <ul className='carusels__container'>
          {dataDoArt.map((a)=>{
            return <li key={a.artist} className='carousel__container'>
              <div className='carousel__img-container'>
                <img src={a.imgArtist} alt="img-artist" className='carousel__img' />
              </div>
              <p className='carousel__artist'>{a.artist}</p>
              <p className='carousel__typeArt'>{a.typeArt}</p>
              <p className='carousel__biography'>{a.biography}</p>
              <ButtonSmall text={'SEE MORE'} color={'gray'} width={'9rem'} />
            </li>
          })}
        </ul>
        <div className=''>
        </div>
       </div>

    </StyledCarousel>
  );
};

export default Carousel;


