import {} from "react";
import StyledProfile from "./styled-profile";
import { dataProfile } from "./data-profile";
import Header from "../../templates/header-user/header";
import Footer from "../../templates/footer-user/footer";

const Profile = () => {
  return (
    <StyledProfile>
      <Header />

      <section className="form">

        <h1 className="form__title">YOUR PROFILE</h1>


        <form action="" className="form__container">


          <div className="form__container--inputs">

            <label htmlFor="form__input--name">NAME</label>
            <div className="form__container--input">
              <input type="text" id="form__input--name" />
              <button className="product__button-pencil"></button>
            </div>

            <label htmlFor="form__input--user">USER</label>
            <div className="form__container--input">
              <input type="text" id="form__input--user" />
              <button className="product__button-pencil"></button>
            </div>

            <label htmlFor="form__input--password">PASSWORD</label>
            <div className="form__container--input">
              <input type="password" id="form__input--password" />
              <button className="product__button-pencil"></button>
            </div>
          </div>
        </form>

        <h1 className="orders__title">ORDERS</h1>

        <ul className="orders__container">
          {dataProfile.map((a, b) => {
            return (
              <li key={b} className="orders__text--container">
                <p className="orders__number">{a.orderNumber}</p>
                <p className="orders__status">{a.status}</p>
              </li>
            );
          })}
        </ul>

        <div className="buttons__container">
          <button className="button">DELETE</button>
          <button className="button">UPDATE</button>
        </div>
      </section>

      <Footer />
    </StyledProfile>
  );
};

export default Profile;
