import {} from "react";
import StyledInputText from "./styled-input-text";

const InputText = ({ title, gap, type }) => {
  const styleGap = {
    gap: `${gap}rem`,
  };

  return (
    <StyledInputText>
      <label htmlFor="" style={styleGap}>
        {title}
        <div className="form__container--input">
          <input type={type} id="form__input-text" />
        </div>
      </label>
    </StyledInputText>
  );
};

export default InputText;
