import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  direction: "back" | "next";
}
const StyledButton = styled.button``;

function Button({ children, direction }: ButtonProps) {
  const handleClick = () => {
    if (direction === "back") {
      console.log("Back button clicked");
    } else if (direction === "next") {
      console.log("Next button clicked");
    }
  };

  return <StyledButton onClick={() => handleClick()}>{children}</StyledButton>;
}

export default Button;
