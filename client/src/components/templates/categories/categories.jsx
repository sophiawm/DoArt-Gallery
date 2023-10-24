import {} from "react";
import StyledCategories from "./styledCategories";
import { Link } from 'react-router-dom';


export const categories = [
  "Paintings",
  "Textiles",
  "Sculpture",
  "Photography",
  "Collage",
  "Mixed-media",
];

const Categories = () => {
  return (
    <StyledCategories>
      <section className="categories__container">
        <div className="categories__title">Art Categories</div>

        {categories.map((a) => {
          return (
            <Link key={a} to='/react-marketplace/category'>
            <button className="categories__button">
              {a}
            </button>
            </Link>
          );
        })}
      </section>
    </StyledCategories>
  );
};

export default Categories;
