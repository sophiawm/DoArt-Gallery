import {} from "react";
import ButtonSmall from "../../atoms/buttons/button-small";
import InputText from "../../atoms/inputs/input-text/input-text";
import StyledRegister from "./styled-register";


const Register = () => {
  return (
    <StyledRegister>
      <header></header>
      <section className="form">
        <h1 className="form__title">Join our community</h1>
        <form action="" className="form__container">
          <div className="form__container--inputs">
            <InputText title={"NAME"} gap={"0.3"} type={'text'} />

            <InputText title={"EMAIL"} gap={"0.3"} type={'email'}/>

            <InputText title={"PASSWORD"} gap={"0.3"} type={'password'} />
          </div>

          <ButtonSmall
            text={"CREATE ACCOUNT"}
            color={"black"}
            width={"15rem"}
          />
        </form>
      </section>
      <footer></footer>
    </StyledRegister>
  );
};

export default Register;
