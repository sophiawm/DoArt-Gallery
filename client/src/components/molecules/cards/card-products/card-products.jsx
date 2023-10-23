import { useEffect, useState } from "react";
import StyledCard from "./styledCard";
import { Link } from 'react-router-dom';




export const CardProducts = ({mapear}) => {

  const [artwork, setArtwork] = useState([]);

  useEffect(()=>{
    const getArtwork=()=>{
      fetch('http://localhost:3002/artwork')
        .then((res)=>{
          return res.json()
        })
        .then((res)=>{
          setArtwork(res)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    getArtwork();
  },[])

  return (
    <StyledCard>
      <div>
        <ul className="cards__container">
          {mapear.map((b) => (
            <li key={b} className="card">
              <Link to={`/product/${b.artworkName}`}>
                <div className="card__image-container">
                  <img src={b.image} className="card__image" />
                </div>

                <p className="card__title">{b.artworkName}</p>
                <p className="card__artist">{b.artworkArtist}</p>
                <p className="card__price">{b.artworkPrice + "$"}</p>
                <img
                  src="src/assets/icons/heart-icon.svg"
                  alt="icon__heart"
                  className="card__icon"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledCard>
  );
};

export default CardProducts;