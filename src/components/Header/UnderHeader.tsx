import React from "react";
import logo from "../../img/logo-second.png";

export const UnderHeader: React.FC = () => {
  return (
    <div className="under-header">
      <div className="items">
        <div className="item">
          <img src={logo} alt="" />
        </div>
        <div className="item">Учебный центр</div>
        <div className="item">Маршруты полетов</div>
        <div className="item">Инфраструктура комплекса</div>
      </div>
    </div>
  );
};
