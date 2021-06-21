import React from "react";
import oclock from "../../img/info/oclock.svg";
type TProps = {
  content: any;
};
export const ItemRouter: React.FC<TProps> = ({ content }) => {
  return (
    <div className="item-routers">
      <div className="image-wrapper">
        <img src={content.url} alt="" />
      </div>
      <div className="name-wrapper">
        <h2 className="h2">{content.name}</h2>
      </div>
      <div className="time-wrapper">
        <p>
          <img src={oclock} alt="" />
          {content.time}
        </p>
      </div>
    </div>
  );
};
