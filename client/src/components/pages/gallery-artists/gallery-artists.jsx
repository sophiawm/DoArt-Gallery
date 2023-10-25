import CardArtist from "../../molecules/cards/card-artist/card-artist";
import StyledGalleryArtists from "./styled-gallery-artist";

const GalleryArtist = () => {
  return (
    <StyledGalleryArtists>
      <section className="gallery-artists">
        <h1 className="gallery__title">OUR ARTIST</h1>
        <CardArtist />
      </section>
    </StyledGalleryArtists>
  );
};

export default GalleryArtist;
