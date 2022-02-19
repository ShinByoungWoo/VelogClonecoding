import { goForward } from "connected-react-router";
import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, size, border_radius, margin, shape } = props;
  const styles = {
    src: src,
    size: size,
    borderRadius: border_radius,
    margin: margin,
  };

  if (shape === "rectangle") {
    return (
      <AspectOutter {...styles}>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  return (
    <React.Fragment>
      <Images {...styles} />
    </React.Fragment>
  );
};
Image.defaultProps = {
  shape: "rectangle",
  src: "",
  size: 36,
  border_radius: false,
  margin: false,
};

//게시판 작성 이미지입니다!
const AspectOutter = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  max-height: 100%
    display: flex;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft};` : "")}
    @media only screen and (max-width: 500px) {
    min-width: 70%;
  }
`;

const AspectInner = styled.div`
  padding-top: 75%;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  display: block;
  border-radius: ${(props) => props.borderRadius};
`;

const Images = styled.div`
  --size: ${(props) => props.size}vh;
  width: 100%;
  height: var(--size);
  ${(props) =>
    props.borderRadius ? `border-radius:${props.borderRadius}` : ""};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;

export default Image;
