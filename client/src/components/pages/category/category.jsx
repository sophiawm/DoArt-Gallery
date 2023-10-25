import { useRef, useState, useEffect } from "react";
import CardProducts from "../../molecules/cards/card-products/card-products";
import StyledCategory from "./styled-category";

const Category = () => {
  const [searchGet, setSearchGet] = useState(null);

  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    const getArtwork = () => {
      fetch("http://localhost:3002/artwork")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const art = res.filter((a) => a.artworkCategory === searchGet);
          setArtwork(art);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getArtwork();
  }, [searchGet]);

  const searchRef = useRef(null);

  const search = () => {
    setSearchGet(searchRef.current.value);
  };

  return (
    <StyledCategory>
      <section className="category">
        <h1 className="category__title">MIXED-MEDIA</h1>

        <div className="search__container">
          <label htmlFor="search__input">
            <input
              type="text"
              placeholder="Search for product..."
              id="search__input"
              ref={searchRef}
            />
          </label>

          <label htmlFor="search__button" className="search__button--container">
            <input type="button" id="search__button" onClick={search} />
          </label>
        </div>

        <CardProducts
          mapear={artwork.map((a) => {
            return a;
          })}
        />
      </section>
    </StyledCategory>
  );
};

export default Category;
