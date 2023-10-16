import { } from 'react';
import StyledButtonSmall from './styled-button-small';

// eslint-disable-next-line react/prop-types
const ButtonSmall = ({ text, width, color })=>{
  const buttonStyle = {
    width: width,
    backgroundColor: color,
  };

  return (
    <StyledButtonSmall>
      <button style={buttonStyle}>{text}</button>
    </StyledButtonSmall>
  );
};

export default ButtonSmall;
