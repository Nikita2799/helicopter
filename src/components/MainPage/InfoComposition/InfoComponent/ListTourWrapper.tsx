import React from "react";
import first from "../../../../img/info/first.png";
import second from "../../../../img/info/second.png";
import third from "../../../../img/info/third.png";
import watch from "../../../../img/info/watch.svg";

export const ListTourWrapper: React.FC = () => {
  return (
    <div className="list-tour-wrap">
      <h1>ВЕРТОЛЕТНЫЕ ЭКСКУРСИИ</h1>
      <div className="list-tour__items">
        <div className="item">
          <img src={first} alt=""></img>
          <p className="p">Москва с вертолета</p>
          <div className="under-item">
            <img src={watch} alt="" />
            <p>0:40</p>
          </div>
        </div>
        <div className="item">
          <img src={second} alt=""></img>
          <p className="p">Маршрут “Живописный”</p>
          <div className="under-item">
            <img src={watch} alt="" />
            <p>0:15</p>
          </div>
        </div>
        <div className="item">
          <img src={third} alt=""></img>
          <p className="p">“Почувствуй себя пилотом!”</p>
          <div className="under-item">
            <img src={watch} alt="" />
            <p>0:45</p>
          </div>
        </div>
      </div>
      <div className="button">
        <span>Все экскурсии &#8594;</span>
      </div>
    </div>
  );
};
