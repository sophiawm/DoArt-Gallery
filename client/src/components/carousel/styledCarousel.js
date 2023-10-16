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



.main-container {
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

`

export default StyledCarousel;