import { useEffect, useState } from "react";
import StyledProduct from "./styled-product";
import ButtonSmall from "../../atoms/buttons/button-small";
import Header from "../../templates/header-user/header";
import Footer from "../../templates/footer-user/footer";
import { useParams } from 'react-router-dom';

const Product = () => {
  const { art } = useParams();

  const [artwork, setArtwork] = useState([]);

  useEffect(()=>{
    const getArtwork=()=>{
      fetch('http://localhost:3002/artwork/art')
        .then((res)=>{
          return res.json()
        })
        .then((res)=>{
          setArtwork(res.find((a)=>{
            return a.artworkName === art
          }))
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    getArtwork();
  },[art])


  return (
    <StyledProduct>
      <Header />

      <section className="product">
        <div className="product__image-container">
          <img
            src={artwork.image}
            alt="image-product"
            className="product__image"
          />
        </div>



        <div className="product__info-container">
          
          <p className="product__name">{artwork.artworkName}</p>
          <p className="product__artist">{artwork.artworkArtist}</p>

    
          <p className="product__size">
            <span className="bold">Dimensions: </span>
            {artwork.artworkDimensions}
          </p>
          <p className="product__materials">
            <span className="bold">Materials: </span>
            {artwork.artworkMaterials}
          </p>
          <p className="product__description">
            <span className="bold">Description: </span>
            {artwork.artworkDescription}
          </p>

          <p className="product__price">Price: {artwork.artworkPrice + "$"}</p>

        </div>



        <div className="product__info-desktop-one">
          
          <p className="product__name">{artwork.artworkName}</p>

          <p className="product__artist">{artwork.artworkArtist}</p>

          <p className="product__price">Price: {artwork.artworkPrice + "$"}</p>

          </div>

          <div className="product__info-desktop-two">
          <p className="product__size">
            <span className="bold">Dimensions: </span>
            {artwork.artworkDimensions}
          </p>
          <p className="product__materials">
            <span className="bold">Materials: </span>
            {artwork.artworkMaterials}
          </p>
          <p className="product__description">
            <span className="bold">Description: </span>
            {artwork.artworkDescription}
          </p>
          </div>


     
        <div className="buttons__container">
          <ButtonSmall text={'ADD FAVOURITE'} color={'gray'} width={'10rem'}/>
          
          <ButtonSmall text={'ADD TO CART'} color={'black'} width={'10rem'}/>
        </div>
      </section>
      <Footer />
    </StyledProduct>
  );
};

export default Product;
