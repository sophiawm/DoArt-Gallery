import {} from "react";
import React, {useState} from "react";
import ButtonSmall from "../../atoms/buttons/button-small";
import StyledLoginAdmin from "./styled-loginAdmin";
import { Link, useHistory } from "react-router-dom";

const LoginAdmin = () => {
  const [admin_email, setEmail] = useState("");
  const [admin_password; setPassword] = useState("");
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.vale);
  };

  const handleLogin =async () => {
    try{
      const response = await fetch("/admin/login", {
        method: "POST",
        
      })
    }
  }


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
