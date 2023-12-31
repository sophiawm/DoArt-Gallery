import {} from "react";
import StyledHome from "./styled-home";
import { dataDoArt } from "../../../data";
import CardProducts from "../../molecules/cards/card-products/card-products";
import Carousel from "../../templates/carousel/carouselImg";
import Categories from "../../templates/categories/categories";
import Header from "../../templates/header-user/header";
import Footer from "../../templates/footer-user/footer";



const Home = () => {
  return (
    <StyledHome>
      <Header />

      <main className="home">
        <div className="image__container">
          <h1 className="image__title">
            The digital art gallery you’ve always wanted
          </h1>
          <div className="image__button">Find the art you love</div>
        </div>
        <section className="main">
          <h1 className="main__title">This week’s collection</h1>
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

      <Footer />
    </StyledHome>
  );
};

export default Home;
