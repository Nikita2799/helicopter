import React from "react";
import "../currentRouter.sass";
import { routersObject } from "../routersObject";
import oclock from "../../../img/ock.svg";
import Select from "react-select";

export const InfoComposition: React.FC = () => {
  return (
    <div className="current-info-composition">
      <div className="item">
        <img src={routersObject[0].url} alt="" />
      </div>
      <div className="item">
        <h1>{routersObject[0].name}</h1>
        <div className="time">
          <img src={oclock} alt="" />
          <p>{routersObject[0].time}</p>
        </div>
        <div className="select-prcie">
          {/* <Select options={}/> */}
          <p>{routersObject[0].price} &#8381;</p>
          <div className="btn-order">
            <span>Заказать &#8594;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
