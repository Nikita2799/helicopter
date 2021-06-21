import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { UnderHeader } from "../Header/UnderHeader";
import "./router.sass";
import { RoutersMenu } from "./RoutersMenu";
import { ContainerContent } from "./ContainerContent";
export const RouterPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  return (
    <div className="router-page">
      <Header />
      <UnderHeader />
      <div className="top-line-wrapper">
        <h1 className="h1">Маршруты полетов</h1>
      </div>
      <div className="container-flex-wrapper">
        <RoutersMenu setActive={setActiveCategory} active={activeCategory} />
        <ContainerContent category={activeCategory} />
      </div>
      <div className="routers-wrapper-content"></div>
      <Footer />
    </div>
  );
};
