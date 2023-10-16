import { } from 'react';
import StyledInputTextarea from './styled-input-textarea';


// eslint-disable-next-line react/prop-types
const InputTextarea =({title, gap})=>{

    const styleGap = {
        gap: `${gap}rem`,
    }

    return(
        <StyledInputTextarea>
        <label htmlFor="" style={styleGap}>
            {title}
              <div className="form__container--input">
                <textarea
                  type="text"
                  id="form__input-textarea"
                ></textarea>
              </div>
            </label>
        </StyledInputTextarea>
    )
}


export default InputTextarea;