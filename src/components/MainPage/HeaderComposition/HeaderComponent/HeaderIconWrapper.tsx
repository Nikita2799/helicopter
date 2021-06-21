import React from "react";
import helic from "../../../../img/headerComposition/helic.svg";
import map from "../../../../img/headerComposition/map.svg";

export const HeaderIconWrapper: React.FC = () => {
  return (
    <div className="header-icon-wrap">
      <div className="icon-item">
        <img src={map} alt="" />
        <p>
          Вертолетные
          <br /> экскурсии
        </p>
      </div>
      <div className="icon-item">
        <img src={helic} alt="" />
        <p>
          Обучение <br />
          пилотированию
        </p>
      </div>
    </div>
  );
};
