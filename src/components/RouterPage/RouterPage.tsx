import React from "react";
import { Header } from "../Header/Header";
import { UnderHeader } from "../Header/UnderHeader";
import "./router.sass";

export const RouterPage: React.FC = () => {
  return (
    <div className="router-page">
      <Header />
      <UnderHeader />
    </div>
  );
};
