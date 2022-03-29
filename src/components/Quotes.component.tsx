import React, { useEffect, FC, useState } from "react";
import axios, { Axios } from "axios";
import styled from "styled-components";
import { isVisible } from "@testing-library/user-event/dist/utils";
interface IQuote {
  isVisible: boolean;
}
const QuotesComponent: FC<IQuote> = ({ isVisible }) => {
  const [Quotes, setQuotes] = useState<any>([]);

  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get("https://type.fit/api/quotes");
      const results = response.data;
      const randomQuotes = results[Math.floor(Math.random() * results.length)];
      setQuotes(randomQuotes);
    };
    setInterval(() => {
      getQuotes();
    }, 9000);
    getQuotes();
  }, []);

  return (
    <QuoteStyle isVisible={isVisible}>
      <li>
        {Quotes.text}
        <p>{Quotes.author}</p>
      </li>
    </QuoteStyle>
  );
};

export default QuotesComponent;
const QuoteStyle = styled.div<IQuote>`
  width: 20%;
  @media screen and (max-width: 920px) {
    width: 60%;
  }
  display: flex;
  right: 5rem;
  top: 15%;
  position: absolute;
  text-wrap: wrap;
  z-index: 2;
  color: ${(props) => (props.isVisible ? "white" : "black")};
  font-size: 14px;
  @media screen and (min-width: 2500px) {
    width: 35%;
    font-size: 2.5rem;
  }
  word-wrap: break-word;
  p {
    font-weight: 800;
    text-transform: italic;
  }
`;
