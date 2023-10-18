import { useEffect, useRef, useState } from 'react';
import StyledCarousel from './styledCarousel';
import img from './imgCarousel';

export const Carousel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? img.length - 1 : curr - 1;
      });
    } else {
      setCurrentIndex((curr) => (curr === img.length - 1 ? 0 : curr + 1));
    }
  };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       scrollToImage('next');
//     }, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []); 
  
  const styleCarousel = {
    width: '390px',
    height: '390px',
    borderRadius: '200px',
  };


  return (
    <StyledCarousel>
      <div className="main-container">
        <div className="slider-container">
          <div className='leftArrow' onClick={() => { scrollToImage('prev') }}>&#10092;</div>
          <div className='rightArrow' onClick={() => { scrollToImage('next') }}>&#10093;</div>
          <div className="container-images">
            <ul ref={listRef}>
              {img.map((item) => (
                <li key={item.id} >
                  <img src={item.img} style={styleCarousel} alt={item.title} />
                  <h1 className='carousel__title'>{item.title}</h1>
                  <h2 className='carousel__subtitle'>{item.subtitle}</h2>
                  <p className='carousel__description'>{item.description}</p>
                  <button className='carousel__button'>SEE MORE</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

