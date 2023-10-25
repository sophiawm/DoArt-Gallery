import {} from "react";
import ButtonSmall from "../../atoms/buttons/button-small";
import StyledLoginAdmin from "./styled-loginAdmin";
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  return (
    <StyledLoginAdmin>
      <section className="form">
        <h1 className="form__title">WELCOME, ADMIN!</h1>

        <form action="" className="form__container">
          <div className="form__container--inputs">
            <label htmlFor="form__input-user">
              USER
              <div className="form__container--input">
                <input type="text" id="form__input-user" />
              </div>
            </label>

            <label htmlFor="form__input-password">
              PASSWORD
              <div className="form__container--input">
                <input type="password" id="form__input-password" />
              </div>
            </label>
          </div>
          <Link to="/react-marketplace/dashboard">
            <ButtonSmall text={"LOGIN"} color={"black"} width={"15rem"} />
          </Link>
        </form>
      </section>
    </StyledLoginAdmin>
  );
};

export default LoginAdmin;
