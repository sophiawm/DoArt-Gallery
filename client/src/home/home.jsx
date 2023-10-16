import {} from "react";
import Carousel from "../components/carousel/carouselImg";
import StyledHome from "./styled-home";
import CardProducts from "../components/cards/card-products/card-products";
import Categories from "../components/categories/categories";
import { dataDoArt } from "../data";



const Home = () => {
  return (
    <StyledHome>
      <header></header>

      <main className="home">
        <div className="image__container">
          <h1 className="image__title">
            The digital art gallery you’ve always wanted
          </h1>
          <button className="image__button">Find the art you love</button>
        </div>
        <section className="main">
          <h1 className="main__title">This week’s <br /> collection</h1>
          <CardProducts map={dataDoArt.flatMap((a) => a.products)} />
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

      <footer></footer>
    </StyledHome>
  );
};

export default Home;
