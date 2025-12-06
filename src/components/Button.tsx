import type React from "react";
import "../style/Button.css";

interface ButtonProps {
  buttonName: string;
  children?: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const Button = ({
  children,
  color = "primary",
  buttonName,
  onClick,
}: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} name={buttonName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
