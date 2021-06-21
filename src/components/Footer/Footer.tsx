import React from "react";
import "./footer.sass";
import mail from "../../img/info/mail.svg";
import map from "../../img/info/map.svg";
import oclock from "../../img/info/oclock.svg";
import phone from "../../img/info/phone.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="items">
        <div className="item">
          <img src={map} alt="" />
          <p>
            500 метров от МКАД по Новорижскому
            <br /> шоссе, съезд на Мякининское шоссе.
          </p>
        </div>
        <div className="item">
          <img src={phone} alt="" />
          <p>+7 (495) 77-000-77, +7 (800) 551-77-96</p>
        </div>
        <div className="item">
          <img src={mail} alt="" />
          <p>office@heliport-moscow.ru</p>
        </div>
        <div className="item">
          <img src={oclock} alt="" />
          <p>08.00 - 21.00</p>
        </div>
      </div>
    </footer>
  );
};
