import React from "react";
import "./info.sass";
import { ListTourWrapper } from "./InfoComponent/ListTourWrapper";
import { TextAboutWrapper } from "./InfoComponent/TextAboutWrapper";
import { TrainingCenterWrapper } from "./InfoComponent/TrainingCenterWrapper";

export const InfoComposition: React.FC = () => {
  return (
    <div className="info-composition">
      <TextAboutWrapper />
      <TrainingCenterWrapper />
      <ListTourWrapper />
    </div>
  );
};
