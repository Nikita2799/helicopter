import React from "react";
import { Header } from "./HeaderComponent/Header";
import { HeaderIconWrapper } from "./HeaderComponent/HeaderIconWrapper";
import { HeaderOrderWrapper } from "./HeaderComponent/HeaderOrderWrapper";
import { HeaderTextWrapper } from "./HeaderComponent/HeaderTextWrapper";
import "./headerComposition.sass";

export const HeaderComposition: React.FC = () => {
  return (
    <div className="header-composition">
      <div className="header-composition_background">
        <Header />
        <HeaderTextWrapper />
        <HeaderOrderWrapper />
        <HeaderIconWrapper />
      </div>
    </div>
  );
};
