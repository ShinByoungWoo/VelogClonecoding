import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { src, size, aligntem, border_radius } = props;

  const styles = {
    src: src,
    size: size,
    aligntem,
    border_radius: border_radius,
  };
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: "https://10wallpaper.com/wallpaper/1366x768/1407/disney_castle-High_quality_wallpaper_1366x768.jpg",
  size: "",
  border_radius: false,
};

const ImageDefault = styled.img`
  max-height: 100vh;
  max-width: 100%;
  min-width: 50%;
  width: auto;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
  ${(props) =>
    props.border_radius ? `border-radius: ${props.border_radius};` : ""}
  ${
    "" /* @media (max-width: 800px) {
    margin-top: 1.5rem;
  } */
  }
`;
export default Image;
