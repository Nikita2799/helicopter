import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { UnderHeader } from "../Header/UnderHeader";
import "./currentRouter.sass";
import { InfoComposition } from "./CurrentRouterComposition/InfoComposition";

export const CurrentRouterPage: React.FC = () => {
  return (
    <div className="current-router-page">
      <Header />
      <UnderHeader />
      <InfoComposition />
      <Footer />
    </div>
  );
};
