import {} from "react";
import StyledProduct from "./styled-product";
import { dataDoArt } from "../../../data";
import ButtonSmall from "../../atoms/buttons/button-small";

const Product = () => {
  const nameProduct = "Some Said You Were the Spitting Image of Evil, 1995-1996";


  const findProduct = dataDoArt.flatMap((a)=>{
    return a.products.find((b)=>{
      return b.nameProduct = nameProduct;
    })
  })

  const find = findProduct.find((a)=>{
    return a.nameProduct === nameProduct
  })

  return (
    <StyledProduct>
      <header></header>

      <section className="product">
        <div className="product__image-container">
          <img
            src={find.imgProdut}
            alt="image-product"
            className="product__image"
          />
        </div>
        <div className="product__info-container">
          <p className="product__name">{find.nameProduct}</p>
          <p className="product__artist">{find.artist}</p>
          <p className="product__size">
            <span className="bold">Dimensions: </span>
            {find.dimensions}
          </p>
          <p className="product__materials">
            <span className="bold">Materials: </span>
            {find.materials}
          </p>
          <p className="product__description">
            <span className="bold">Description: </span>
            {find.description}
          </p>
          <p className="product__price">Price: {find.Price + "$"}</p>
        </div>

        <div className="buttons__container">
          <ButtonSmall text={'ADD FAVOURITE'} color={'gray'} width={'10rem'}/>
          <ButtonSmall text={'ADD TO CART'} color={'black'} width={'10rem'}/>
        </div>
      </section>
      <footer></footer>
    </StyledProduct>
  );
};

export default Product;
