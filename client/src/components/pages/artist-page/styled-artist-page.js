import styled from "styled-components";

const StyledArtistPage = styled.div`
  .artist-page {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .page__title {
    text-align: center;
  }

  @media screen and (min-width: 391px) {
    .artist-page {
      gap: 3rem;
      margin: 7rem auto;
    }
  }
`;

export default StyledArtistPage;
