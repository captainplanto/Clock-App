
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
interface IfullDate {
  isVisible: boolean;
}
const DateComponent: FC<IfullDate> = ({ isVisible }) => {
  const [weekDay, setweekDay] = useState<any>();
  const [month, setMonth] = useState<string>();
  const [theDate, setTheDate] = useState<number>();

  useEffect(() => {
    const getWeekDay = () => {
      const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let date = week[new Date().getDay()];
      let trimDate = date.slice(0, 3);
      setweekDay(trimDate);
    };

    const getMonth = () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let date = months[new Date().getMonth()];
      setMonth(date);
    };

    const getdate = () => {
      let date = new Date().getDate();

      setTheDate(date);
    };

    getWeekDay();
    getMonth();
    getdate();
  }, [weekDay, month, theDate]);

  return (
    <FullDate
      isVisible={isVisible}
    >{`${weekDay}, ${month} ${theDate}.`}</FullDate>
  );
};
export default DateComponent;

const FullDate = styled.div<IfullDate>`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 58%;
  @media screen and (max-width: 480px) {
    top: 53%;
  }
  @media screen and (min-width: 2500px) {
    top: 50%;
    font-size: 2.5rem;
  }
  font-size: 1.5rem;

  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => (props.isVisible ? "white" : "black")};
  z-index: 2;
`;
