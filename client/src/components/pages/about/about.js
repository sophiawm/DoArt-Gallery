import styled from "styled-components";

const StyledAboutUs = styled.div`
  .about {
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  .about__image {
    background-image: url(src/assets/pages/about-banner.svg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 20rem;
    width: 100vw;
    display: grid;
    place-items: center;
  }

  .about__image-text {
    text-align: center;
    width: 60%;
    color: white;
    font-size: 2rem;
  }

  .about__our-mission-container,
  .about__our-vision-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    hyphens: auto;
    text-align: start;
  }

  .about__our-mission-title,
  .about__our-vision-title {
    text-align: center;
  }

  .about__our-mission-text,
  .about__our-vision-text {
    font-size: 1rem;
    word-spacing: 0.6rem;
    flex-grow: 1;
    overflow-wrap: break-word;
    height: auto;
  }

  .about__logo-container {
    margin: 0 auto;
  }

  .container__mision-vision {
    display: grid;
    gap: 7rem;
  }

  @media screen and (min-width: 391px) {
    .container__mision-vision {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 2.5rem;
    }

    .about__our-mission-container {
      grid-column: 1;
      grid-row: 1;
      margin: 0;
      justify-self: end;
      width: 80%;
    }

    .about__our-mission-title,
    .about__our-vision-title {
      text-align: start;
    }

    .about__our-vision-container {
      grid-column: 1;
      grid-row: 2;
      margin: 0;
      justify-self: end;
      width: 80%;
    }

    .about__logo-container {
      grid-row: 1 / span 2;
    }

    .about {
      height: 100%;
      width: 100vw;
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export default StyledAboutUs;