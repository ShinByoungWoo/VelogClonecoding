import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_end,
    is_flex,
    flex_wrap,
    is_colum,
    is_center,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    border,
    border_radius,
    box_shadow,
  } = props;

  const styles = {
    is_flex: is_flex,
    is_end: is_end,
    is_colum: is_colum,
    is_center: is_center,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    border: border,
    border_radius: border_radius,
    box_shadow: box_shadow,
    flex_wrap: flex_wrap,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_end: false,
  is_center: false,
  is_colum: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  right: false,
  _onClick: () => {},
  border: false,
  border_radius: false,
  box_shadow: false,
  flex_wrap: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.flex_wrap ? `flex-wrap : wrap;` : "")}
  ${(props) =>
    props.is_end
      ? `display: flex; align-items: center; justify-content: flex-end; `
      : ""}
  ${(props) => (props.center ? `text-align : center` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) =>
    props.border_radius ? `border-radius: ${props.border_radius};` : ""}
  ${(props) =>
    props.box_shadow
      ? `box-shadow: rgb(222 222 222) 0px 2px 4px 0px, #fff 0px 0px 0px 1px;`
      : ""}
  :hover {
    ${(props) =>
      props.box_shadow ? `box-shadow: rgb(222 222 222) 0px 6px 18px 0px` : ""}
  }

  ${(props) =>
    props.is_center
      ? `display: flex; align-items: center; justify-content: center; `
      : ""}

  ${(props) =>
    props.is_colum
      ? `display: flex; align-items: center; flex-direction: colum; `
      : ""}

  ${
    "" /* @media only screen and (max-width: 960px) {
  } */
  }
`;

export default Grid;
