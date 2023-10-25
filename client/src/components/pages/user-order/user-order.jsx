import { dataUserOrder } from "./data-user-order";
import StyledUserOrder from "./styled-user-order";

const UserOrder = () => {
  const numberOrder = "7654321";

  const findIndex = dataUserOrder.find((a) => {
    return a.numberOrder === numberOrder;
  });

  return (
    <StyledUserOrder>
      <section className="user__cart">
        <h1 className="cart__title">PRODUCTS</h1>

        <ul className="card__container">
          {findIndex.order.map((a) => {
            return (
              <li key={a.id} className="card">
                <div className="card__image-conainer">
                  <img
                    src={a.img}
                    alt="image-product"
                    className="card__image"
                  />
                </div>
                <div className="card__container--text">
                  <p className="card__product">{a.productName}</p>
                  <p className="card__characteristics">{a.characteristics}</p>
                  <p className="card__artist">{a.nameArtist}</p>
                </div>

                <p className="card__price">{a.price + "$"}</p>
              </li>
            );
          })}
        </ul>

        <h1 className="user__title">{"ORDER " + findIndex.numberOrder}</h1>

        <section className="pay">
          <div className="pay__total">
            <p className="total-products-text">Total products</p>
            <p>{"x" + dataUserOrder.length}</p>
          </div>
          <div className="pay__price">
            <p className="total-price-text">Total price</p>
            <p>
              {findIndex.order.reduce(
                (accumulator, item) => accumulator + item.price,
                0
              ) + "$"}
            </p>
          </div>
          <div className="pay__shipping-text">
            <p className="shipping-costs-text">Shipping costs</p>
            <p>15$</p>
          </div>
        </section>

        <div className="buttons__container">
          <button className="button">VIEW PROFILE</button>
          <button className="button">SHOP MORE</button>
        </div>
      </section>
    </StyledUserOrder>
  );
};

export default UserOrder;
