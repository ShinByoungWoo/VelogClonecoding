import React from 'react';
import styled from 'styled-components';

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
  width: '100%',
  height: '100%',
  padding: '12px 0px',
  cursor: null,
  display: 'false',
  borderRadius: false,
  bg: false,
  border: '',
};

const MyButton = styled.button`
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')} 
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ''} 
  color: #ffffff;
  height: ${(props) => props.height};
  transition: ease all 0.1s;
`;

export default Button;
