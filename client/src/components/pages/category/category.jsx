import {} from "react";
import { dataDoArt } from "../../../data";
import CardProducts from "../../molecules/cards/card-products/card-products";
import Footer from "../../templates/footer-user/footer";
import Header from "../../templates/header-user/header";

import StyledCategory from "./styled-category";


const Category = () => {
  const nameFind = "Carrie Mae Weems";

  const find = dataDoArt
    .find((a) => {
      return a.artist === nameFind;
    })
    .products.map((b) => {
      return b;
    });

  return (
    <StyledCategory>
      <Header />
      <section className="category">
        <h1 className="category__title">MIXED-MEDIA</h1>

        <div className="search__container">
          <label htmlFor="search__input">
            <input
              type="text"
              placeholder="Search for product..."
              id="search__input"
            />
          </label>

          <label htmlFor="search__button" className="search__button--container">
            <input type="button" id="search__button" />
          </label>
        </div>
  
          <CardProducts map={find} />

        <Footer />
      </section>
    </StyledCategory>
  );
};

export default Category;
