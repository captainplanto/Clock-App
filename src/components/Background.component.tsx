import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import image from "../Assets/Clock-Background.jpg";
import image2 from "../Assets/Clock-Background2.jpg";

interface IClockComponent {
  style?: any;
  isVisible?: boolean;
}

const BackgroundComponent: FC<IClockComponent> = ({
  style,
  isVisible,
  ...props
}) => {
  return (
    <Background style={style} isVisible={isVisible} {...props}>
      <img
        src={isVisible ? image : image2}
        alt={isVisible ? "clock-background-image" : "clock-background-image2"}
      />
    </Background>
  );
};

export default BackgroundComponent;

const Background = styled.div<IClockComponent>`
  position: relative;
  z-index: 1;
  :before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    background-color: ${(props) => (props.isVisible ? "black" : "white")};
    opacity: 0.6;
    z-index: 200;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }
`;
