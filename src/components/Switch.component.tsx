import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { FC, useState } from "react";
import IconBlack from "../Assets/IconBlack.png";
import IconWhite from "../Assets/IconWhite.png";

interface Ivisible {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchesGroup: FC<Ivisible> = ({ isVisible, setIsVisible }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(!isVisible);
  };

  return (
    <FormStyle>
      <FormControlLabel
        control={<Switch checked={isVisible} onChange={handleChange} />}
        label=""
      />
      <ImageSwitch
        src={isVisible ? IconWhite : IconBlack}
        alt={isVisible ? "LightMode Icon" : "Dark mode Icon"}
      />
    </FormStyle>
  );
};
export default SwitchesGroup;

const FormStyle = styled.div`
  display: flex;
  gap: 1px;
  position: absolute;
  z-index: 2;
  top: 2rem;
  left: 2rem;
  color: white;
  switch{

`;

const ImageSwitch = styled.img`
  width: 2rem;
  object-fit: cover;
`;
