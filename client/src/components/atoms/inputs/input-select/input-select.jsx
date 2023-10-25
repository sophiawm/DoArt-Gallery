import {} from "react";
import StyledInputSelect from "./styled-input-select";

const InputSelect = ({ title, gap, map }) => {
  const styleGap = {
    gap: `${gap}rem`,
  };
  return (
    <StyledInputSelect>
      <label htmlFor="" style={styleGap}>
        {title}
        <div className="form__container--input">
          <select type="text" id="form__input-select">
            <option value=""></option>
            {map.map((a, b) => (
              <option key={b} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </label>
    </StyledInputSelect>
  );
};

export default InputSelect;
