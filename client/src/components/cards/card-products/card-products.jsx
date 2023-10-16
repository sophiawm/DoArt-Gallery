import { } from "react";
import { dataDoArt } from "../../../data";
import StyledCard from "./styledCard";


export const AllArtistProducts = dataDoArt.flatMap((a) => a.products);



export const CardProducts = ({map}) => {


  return (
    <StyledCard>
      <div>
        <ul className="cards__container">
          {map.map((b) => (
            <li key={b} className="card">
              <div className="card__image-container">
                <img src={b.imgProdut} className="card__image" />
              </div>

              <p className="card__title">{b.nameProduct}</p>

              <p className="card__artist">{b.artist}</p>

              <p className="card__price">{b.Price + "$"}</p>
              <img
                src="src/assets/icons/heart-icon.svg"
                alt="icon__heart"
                className="card__icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </StyledCard>
  );
};

export default CardProducts;
