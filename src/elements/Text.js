import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, center, margin } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    center: center,
    margin: margin,
  };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  center: false,
  margin: false,
  flex: false,
};

const P = styled.p`
  ${(props) => (props.center ? `text-align: center;` : "")}
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  transition: ease all 0.1s;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  /* @media only screen and (max-width: 500px) {
    min-width: 70%;
  } */
`;

export default Text;
