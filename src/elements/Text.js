import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    center,
    margin,
    line_height,
    height,
    overflow,
    cursor,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    center: center,
    margin: margin,
    line_height: line_height,
    height: height,
    overflow: overflow,
    cursor: cursor,
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
  cursor: null,
};

const P = styled.p`
  cursor: ${(props) => props.cursor};
  ${(props) => (props.center ? `text-align: center;` : "")}
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  transition: ease all 0.1s;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  line-height: ${(props) => props.line_height};
  height: ${(props) => props.height};
  overflow: ${(props) => props.overflow};
`;

export default Text;
