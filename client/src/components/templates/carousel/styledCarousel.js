import styled from 'styled-components';


const StyledCarousel = styled.div `

ul,
li {
  list-style: none;
  white-space: nowrap;
}

li {
  display: inline-block;
  text-align: center;
}



.carousel {
  width: 90%;
  height: 100%;
}


.slider-container {
  position: relative;
  height: 100%;
}



.leftArrow {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 50px;
  font-weight: 700;
  color: black;
  z-index: 999;
  cursor: pointer;
}

.rightArrow {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 50px;
  font-weight: 700;
  color: black;
  z-index: 999;
  cursor: pointer;
}

.container-images {
    width: 370px;
    height: 100%;
    border: 1px solid #eee;
    overflow: hidden;
}

.carousel__description {
    overflow: hidden;
    white-space: wrap;
    width: 50%;
    margin: 0 auto; 
  }

.carousel__title{
    width: auto;
}


.carousel__button{
    height: 4rem;
    width: 10rem;
    border-radius: 3rem;
    background-color: #8C8C8C;
    color: white;
    font-weight: bold;
    border: none;
}

.carousel-desktop{
  display: none; 
}


@media screen and (min-width: 391px){
  .carousel{
    display: none; 
  }

  .carousel-desktop{
    display: block;
    width: 100%;
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
  }

  .carousel__typeArt{
    font-weight: 600;
  }


}
`

export default StyledCarousel;