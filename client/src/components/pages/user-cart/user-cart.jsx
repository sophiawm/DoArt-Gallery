import StyledUserCart from "./styled-user-cart";
import ButtonSmall from "../../atoms/buttons/button-small";
import Pay from "../../templates/pay/user-cart";
import CardOrder from "../../molecules/cards/card-order/user-cart";
import { Link } from "react-router-dom";

const UserCart = () => {
  const artCart = ["Some Said You Were the Spitting Image of Evil, 1995-1996"];

  return (
    <StyledUserCart>
      <section className="user__cart">
        <h1 className="user__title">SHOPPING CART</h1>

        <div className="cart">
          <CardOrder arts={artCart} />
        </div>

        <div className="pay__cart">
          <Pay prices={artCart} />
        </div>

        <div className="buttons__container">
          <Link to="/react-marketplace/home">
            <ButtonSmall text={"SHOP MORE"} color={"black"} width={"10rem"} />
          </Link>

          <ButtonSmall text={"CHECK OUT"} color={"black"} width={"10rem"} />
        </div>
      </section>
    </StyledUserCart>
  );
};

export default UserCart;
