import { useEffect, useState } from "react";
import CardArtistPage from "../../molecules/cards/card-artist-page/card-artist-page";
import CardProducts from "../../molecules/cards/card-products/card-products";
import StyledArtistPage from "./styled-artist-page";

const ArtistPage = () => {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const getArtwork = () => {
      fetch("http://localhost:3002/artwork")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const art = res.filter((a) => {
            return a.artworkArtist === "Yinka Shonibare";
          });
          setArtwork(art);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArtwork();
  }, []);

  return (
    <StyledArtistPage>
      <section className="artist-page">
        <CardArtistPage />

        <h1 className="page__title">ARTWORK</h1>
        <CardProducts mapear={artwork} />
      </section>
    </StyledArtistPage>
  );
};

export default ArtistPage;
