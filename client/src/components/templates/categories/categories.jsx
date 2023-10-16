import {} from "react";
import StyledCategories from "./styledCategories";

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
            <button key={a} className="categories__button">
              {a}
            </button>
          );
        })}
      </section>
    </StyledCategories>
  );
};

export default Categories;
