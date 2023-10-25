import {} from "react";
import StyledFooter from "./styled-footer";

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="container__image-text">
          <img
            src="src/assets/pages/logo-footer.svg"
            alt="logo-footer"
            className="footer__logo"
          />
          <p className="footer__text">Find the art you love</p>
        </div>
        {/* desktop version */}

        <div className="our-details__container">
          <p className="our-details__title">OUR DETAILS</p>
          <p>56th Avenue, Brooklyn - New York City, US34300</p>
          <p>+1 956 23 34 34</p>
          <p>contact@doart.com</p>
        </div>

        <div className="keep-in-touch__container">
          <p className="keep-in-touch__title">KEEP IN TOUCH</p>
          <p>Follow us for news and all our activities </p>
          <div className="keep-in-touch__icons">
            <img src="src/assets/icons/Linkedin-icon.svg" alt="linkedin-icon" />
            <img src="src/assets/icons/Facebook-icon.svg" alt="facebook-icon" />
            <img
              src="src/assets/icons/Instagram-icon.svg"
              alt="instagram-icon"
            />
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
