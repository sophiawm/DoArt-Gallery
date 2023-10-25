import StyledButtonSmall from "./styled-button-small";

const ButtonSmall = ({ text, width, color }) => {
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
