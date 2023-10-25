import {} from "react";
import Categories from "../../templates/categories/categories";
import StyledAboutUs from "./about";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <section className="about">
        <div className="about__image">
          <h1 className="about__image-text">
            Welcome to a new place to feel inspired
          </h1>
        </div>

        <div className="container__mision-vision">
          <div className="about__our-mission-container">
            <h1 className="about__our-mission-title">OUR MISSION</h1>
            <p className="about__our-mission-text">
              DoArt is a dynamic and vibrant e-commerce platform dedicated to
              celebrating the world of art and artists. This online business is
              a haven for art enthusiasts, collectors, and artists themselves,
              providing a curated selection of exquisite artwork from a diverse
              array of talented artists.
            </p>
          </div>

          <div className="about__our-vision-container">
            <h1 className="about__our-vision-title">OUR VISION</h1>
            <p className="about__our-vision-text">
              DoArt not only aims to connect art lovers with stunning pieces but
              also serves as a platform for emerging and established artists to
              showcase their work to a global audience.
            </p>
          </div>

          <div className="about__logo-container">
            <img
              src="src/assets/pages/about-logo.svg"
              alt="about-logo"
              className="about__logo"
            />
          </div>
        </div>

        <Categories />
      </section>
    </StyledAboutUs>
  );
};

export default AboutUs;
