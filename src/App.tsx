import React, { useState, } from "react";
import "./App.css";
import BackgroundComponent from "./components/Background.component";
import ClockComponent from "./components/Clock.component";
import SwitchComponent from "./components/Switch.component";
import DateComponent from "./components/Date.component";
import QuotesComponent from "./components/Quotes.component";
const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
      <SwitchComponent isVisible={isVisible} setIsVisible={setIsVisible} />
      <QuotesComponent isVisible={isVisible} />
      <ClockComponent isVisible={isVisible} />
      <DateComponent isVisible={isVisible} />
      <BackgroundComponent isVisible={isVisible} />
    </div>
  );
};

export default App;
