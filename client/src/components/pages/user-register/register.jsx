import {} from "react";
import ButtonSmall from "../../atoms/buttons/button-small";
import Footer from "../../templates/footer-user/footer";
import Header from "../../templates/header-user/header";
import StyledRegister from "./styled-register";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <StyledRegister>
      <Header />
      <section className="form">
        <h1 className="form__title">Join our community</h1>
        <form action="" className="form__container">

          <div className="form__container--inputs">
              <label htmlFor="form__input-name">
                NAME
                <div className="form__container--input">
                  <input type="email" id="form__input-name" />
                </div>
              </label>

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
          <Link to='/react-marketplace/home'>
          <ButtonSmall
            text={"CREATE ACCOUNT"}
            color={"black"}
            width={"15rem"}
          />
          </Link>
        </form>
      </section>
      <Footer />
    </StyledRegister>
  );
};

export default Register;
