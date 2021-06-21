import React from "react";
import logo from "../../../../img/headerComposition/logo.png";
import phone from "../../../../img/headerComposition/phone.svg";

export const Header: React.FC = () => {
  return (
    <div className="header-info">
      <div className="logo">
        <img alt="" src={logo} />
      </div>
      <div className="header-info_items">
        <ul>
          <li className="item">
            <div className="header-info_items__phone">
              <img src={phone} alt="" />
            </div>

            <a href="tel:+7 (800) 551-77-96">+7 (800) 551-77-96</a>
          </li>
          <li>
            <a href="tel:+7 (800) 551-77-96">+7 (800) 551-77-96</a>
          </li>
          <li>
            <div className="header-info_oreder-call">
              <p>Заказать звонок</p>
            </div>
          </li>
          <li>
            <div className="header-info_button">
              <span>Заявка на полет</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
