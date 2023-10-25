import {} from "react";
import ButtonSmall from "../../atoms/buttons/button-small";
import StyledLoginUser from "./styled-login-user";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <StyledLoginUser>
      <section className="form">
        <h1 className="form__title">Start your collection with us!</h1>

        <form action="" className="form__container">
          <div className="form__container--inputs">
            <label htmlFor="form__input-email">
              EMAIL
              <div className="form__container--input">
                <input type="email" id="form__input-email" />
              </div>
            </label>

            <label htmlFor="form__input-password">
              PASSWORD
              <div className="form__container--input">
                <input type="password" id="form__input-password" />
              </div>
            </label>
          </div>

          <div className="form__container--buttons">
            <Link to="/react-marketplace/profile">
              <ButtonSmall text={"LOGIN"} color={"black"} width={"15rem"} />
            </Link>

            <Link to="/react-marketplace/register">
              <ButtonSmall text={"REGISTER"} color={"black"} width={"15rem"} />
            </Link>
          </div>
        </form>
      </section>
    </StyledLoginUser>
  );
};

export default LoginUser;
