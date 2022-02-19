// import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    height,
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    cursor,
    bg,
    display,
    borderRadius,
    border,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    height: height,
    cursor: cursor,
    display: display,
    borderRadius: borderRadius,
    bg: bg,
    border: border,
  };

  return (
    <React.Fragment>
      <MyButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </MyButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  height: "100%",
  padding: "12px 0px",
  cursor: null,
  display: "false",
  borderRadius: false,
  bg: false,
};

const MyButton = styled.button`
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  ${"" /* border: ${(props) => props.border}; */}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")} 
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  box-shadow: 0 0px 0px 0px rgba(255, 105, 135, 0.3);
  color: #000000;
  height: ${(props) => props.height};
  transition: ease all 0.1s;

  // background: linear-gradient(45deg, #F9D893 30%, #F6BB43 90%);
  // background-color: #ff9800;

  // @media only screen and (max-width: 960px) {
  //   width: ${(props) => (props.width ? "30%" : "")};
  //   height: ${(props) => (props.height ? "100%" : "")};
  //   padding: ${(props) => (props.padding ? "5%" : "")};
  // }
  // @media only screen and (max-width: 650px) {
  //   width: ${(props) => (props.width ? "30%" : "")};
  //   height: ${(props) => (props.height ? "100%" : "")};
  //   padding: ${(props) => (props.padding ? "5%" : "")};
  // }
`;

export default Button;
