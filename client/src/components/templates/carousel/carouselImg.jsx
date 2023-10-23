import { useState, useEffect } from 'react';
import { dataDoArt } from '../../../data';
import ButtonSmall from '../../atoms/buttons/button-small';
import StyledCarousel from './styledCarousel';
import { Link } from 'react-router-dom';


const Carousel = () => {
  //obtener datos
  const [artist, setArtist] = useState([]);

  useEffect(()=>{
      const getArtist=()=>{
          fetch('http://localhost:3002/artist')
              .then((res)=>{
                  return res.json()
              })
              .then((res)=>{
                  setArtist(res)
                  console.log(res)
              })
              .catch((error)=>{
                  console.log(error)
              })
      }
      getArtist();
  },[])









  //carrusel de fotos
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
          {artist.map((a)=>{
            return <li key={a.id} className='carousel__container'>
              <div className='carousel__img-container'>
                <img src={a.artistImage} alt="img-artist" className='carousel__img' />
              </div>
              <p className='carousel__artist'>{a.artistName}</p>
              <p className='carousel__typeArt'>{a.artistCategory}</p>
              <p className='carousel__biography'>{a.artistDescription}</p>
              <Link to='/artist-page'>
              <ButtonSmall text={'SEE MORE'} color={'gray'} width={'9rem'} />
              </Link>
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


