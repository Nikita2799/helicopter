import React from "react";
import { Header } from "../Header/Header";
import { UnderHeader } from "../Header/UnderHeader";
import "./learn.sass";
export const LearnMain: React.FC = () => {
  return (
    <div className="learn-main">
      <Header />
      <UnderHeader />
      <div className="container-study-wrapper">
        <div className="top-line">
          <h1 className="h1">Авиационный Учебный центр</h1>
        </div>
      </div>
    </div>
  );
};
