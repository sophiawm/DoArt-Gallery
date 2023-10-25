import { useRef } from "react";
import { useState } from "react";
import StyledInputFile from "./styled-input-file";

const InputFile = ({ title, gap }) => {
  const inputText = useRef(null);
  const inputFile = useRef(null);
  const [fileName, setFileName] = useState("");

  const text = () => {
    const file = inputFile.current.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const styleGap = {
    gap: `${gap}rem`,
  };

  return (
    <StyledInputFile>
      <label htmlFor="form__input-file" style={styleGap}>
        {title}
        <div className="form__container--input">
          <input
            type="file"
            id="form__input-file"
            ref={inputFile}
            onChange={text}
          />
          <div className="form__input-text" ref={inputText}>
            {fileName}
          </div>
          <div className="form__input-icon"></div>
        </div>
      </label>
    </StyledInputFile>
  );
};

export default InputFile;
