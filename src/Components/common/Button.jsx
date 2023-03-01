import ButtonTemplate from "@mui/material/Button";

const Button = ({ onClick, children, variant, color }) => {
  return (
    <ButtonTemplate
      onClick={onClick}
      color={color}
      variant={variant}
      children={children}
    />
  );
};

export default Button;
