import { height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { height, text, _onClick, children, margin, width, padding, cursor } =
    props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    height: height,
    cursor: cursor,
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
};

const MyButton = styled.button`
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  background-color: #f68843;
  // background: linear-gradient(45deg, #F9D893 30%, #F6BB43 90%);
  // background-color: #ff9800;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 1px 1px 1px rgba(255, 105, 135, 0.3);
  color: white;
  height: ${(props) => props.height};
  transition: ease all 0.1s;
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
