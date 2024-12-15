import React from "react";
import "./index.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  dataCy?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  dataCy,
}) => {
  return (
    <button
      className="zip-code-button"
      onClick={onClick}
      type={type}
      data-cy={dataCy}
    >
      {children}
    </button>
  );
};

export default Button;
