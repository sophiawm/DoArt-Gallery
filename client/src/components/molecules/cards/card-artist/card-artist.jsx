import { useState } from "react";
import { useEffect } from "react";
import ButtonSmall from "../../../atoms/buttons/button-small";
import StyledCardArtist from "./styled-card-artist";
import { Link } from "react-router-dom";

const CardArtist = () => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const getArtist = () => {
      fetch("http://localhost:3002/artist")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setArtist(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArtist();
  }, []);

  return (
    <StyledCardArtist>
      <section className="cards_artist">
        <div>
          <ul className="card__container">
            {artist.map((a) => {
              return (
                <li key={a.id} className="card">
                  <div className="card__image-container">
                    <img
                      src={a.artistImage}
                      alt="image-artist"
                      className="card__image"
                    />
                  </div>
                  <div className="card__text-container">
                    <p className="card__artist">{a.artistName}</p>
                    <p className="card__type">{a.artistTypeArt}</p>
                    <Link to="/artist-page">
                      <ButtonSmall
                        text={"SEE MORE"}
                        width={"7rem"}
                        color={"grey"}
                      />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </StyledCardArtist>
  );
};

export default CardArtist;
