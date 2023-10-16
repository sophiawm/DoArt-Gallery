import {} from "react";
import ButtonSmall from "../components/buttons/button-small";
import InputText from "../components/inputs/input-text/input-text";
import StyledLoginAdmin from "./styled-loginAdmin";

const LoginAdmin = () => {
  return (
    <StyledLoginAdmin>
      <header></header>
      <section className="form">
        <h1 className="form__title">
          WELCOME, <br /> ADMIN!
        </h1>
        <form action="" className="form__container">
          <div className="form__container--inputs">
            <InputText title={"NAME"} gap={"0.3"} type={"text"} />

            <InputText title={"PASSWORD"} gap={"0.3"} type={"password"} />
          </div>

          <ButtonSmall text={"LOGIN"} color={"black"} width={"15rem"} />
        </form>
      </section>
      <footer></footer>
    </StyledLoginAdmin>
  );
};

export default LoginAdmin;
