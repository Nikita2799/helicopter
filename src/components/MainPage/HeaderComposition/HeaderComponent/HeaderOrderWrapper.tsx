import React from "react";

export const HeaderOrderWrapper: React.FC = () => {
  return (
    <div className="header-order-wrap">
      <div className="item-order">
        <p>Авиакомпания Heliluxury</p>
      </div>
      <div className="item-order">
        <h1>ЗАКАЗ ПОЛЕТОВ</h1>
      </div>
      <div className="button-order">
        <span>Заказать &#8594;</span>
      </div>
    </div>
  );
};
