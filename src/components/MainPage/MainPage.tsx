import React from "react";
import { Footer } from "../Footer/Footer";
import { HeaderComposition } from "./HeaderComposition/HeaderComposition";
import { InfoComposition } from "./InfoComposition/InfoComposition";

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <HeaderComposition />
      <InfoComposition />
      <Footer />
    </div>
  );
};
