import { useEffect, useState } from "react";
import StyledHome from "./styled-home";
import CardProducts from "../../molecules/cards/card-products/card-products";
import Carousel from "../../templates/carousel/carouselImg";
import Categories from "../../templates/categories/categories";

const Home = () => {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const getArtwork = () => {
      fetch("http://localhost:3002/artwork")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setArtwork(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArtwork();
  }, []);

  return (
    <StyledHome>
      <main className="home">
        <div className="image__container">
          <h1 className="image__title">
            The digital art gallery you’ve always wanted
          </h1>
          <div className="image__button">Find the art you love</div>
        </div>
        <section className="main">
          <h1 className="main__title">This week’s collection</h1>
          <CardProducts
            mapear={artwork.map((a) => {
              return a;
            })}
          />
        </section>
        <section className="carousel__section">
          <h1 className="carousel__title">
            FEATURED <br />
            ARTIST
          </h1>
          <Carousel />
        </section>
        <section className="categories__section">
          <Categories />
        </section>
      </main>
    </StyledHome>
  );
};

export default Home;
