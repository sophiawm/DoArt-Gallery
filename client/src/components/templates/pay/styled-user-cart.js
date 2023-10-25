import styled from "styled-components";

const StyledPay = styled.div`
  .pay {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    &__total,
    &__price,
    &__shipping {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 391px) {
    .pay {
      width: 30rem;
      width: 55%;
    }
  }
`;

export default StyledPay;
