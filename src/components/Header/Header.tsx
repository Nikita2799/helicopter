import React from "react";
import "./header.sass";
import phone from "../../img/headerComposition/phone.svg";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-info_items">
        <div className="item">
          <div className="header-info_items__phone">
            <img src={phone} alt="" />
          </div>

          <a href="tel:+7 (800) 551-77-96">+7 (800) 551-77-96</a>
        </div>
        <div className="item">
          <a href="tel:+7 (800) 551-77-96">+7 (800) 551-77-96</a>
        </div>
        <div className="item">
          <div className="header-info_oreder-call">
            <p>Заказать звонок</p>
          </div>
        </div>
        <div className="item">
          <div className="header-info_button">
            <span>Заявка на полет</span>
          </div>
        </div>
      </div>
    </header>
  );
};
