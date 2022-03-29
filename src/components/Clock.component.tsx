import React, { FC, useState } from "react";
import styled from "styled-components";
interface Istyle {
  style?: object;
  isVisible: boolean;
}
const ClockComponent: FC<Istyle> = ({ style, isVisible, ...props }) => {
  const [seconds, setSeconds] = useState<any>(0);
  const [minutes, setMinutes] = useState<any>(0);
  const [hours, setHours] = useState<any>(0);

  const changeSeconds = () => {
    let date = new Date().getSeconds();
    const realDate = `0 ${date}`;
    date < 10 ? setSeconds(realDate) : setSeconds(date);
  };
  setTimeout(() => {
    changeSeconds();
  }, 1000);

  const changeMinutes = () => {
    let date = new Date().getMinutes();
    const realDate = `0 ${date}`;
    date < 10 ? setMinutes(realDate) : setMinutes(date);
  };
  setTimeout(() => {
    changeMinutes();
  }, 1000);

  const changeHours = () => {
    let date = new Date().getHours() % 12;
    const realDate = `0 ${date}  `;
    date < 10 ? setHours(realDate) : setHours(date);
  };

  setTimeout(() => {
    changeHours();
  }, 1000);

  return (
    <Clock style={{ ...style }} isVisible={isVisible}>
      <h1>{`${hours} : ${minutes} : ${seconds} ${
        hours > 12 || 24 ? "PM" : "AM"
      }`}</h1>
    </Clock>
  );
};

export default ClockComponent;

const Clock = styled.div<Istyle>`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  z-index: 2;
  h1 {
    color: ${(props) => (props.isVisible ? "white" : "black")};
    font-size: 5rem;
    text-align: center;
    font-weight: 500;
    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
`;
