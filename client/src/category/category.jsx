import {} from "react";
import CardProducts from "../components/cards/card-products/card-products";
import { dataDoArt } from "../data";
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
      <header></header>
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

        <footer></footer>
      </section>
    </StyledCategory>
  );
};

export default Category;
