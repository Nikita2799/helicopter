import React from "react";
type TProps = {
  setActive: any;
  active: number;
};
export const RoutersMenu: React.FC<TProps> = ({ setActive, active }) => {
  const changeActiveHandler = (category: number) => {
    setActive(category);
  };
  return (
    <div className="router-menu-wrapper">
      <ul>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(0);
            }}
            className={`link-menu ${active === 0 ? "active-link" : ""}`}
          >
            Экскурсионные полеты
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(1);
            }}
            className={`link-menu ${active === 1 ? "active-link" : ""}`}
          >
            Популярные маршруты
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(2);
            }}
            className={`link-menu ${active === 2 ? "active-link" : ""}`}
          >
            Города. Север
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(3);
            }}
            className={`link-menu ${active === 3 ? "active-link" : ""}`}
          >
            Города. Запад
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(4);
            }}
            className={`link-menu ${active === 4 ? "active-link" : ""}`}
          >
            Города. Юг
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(5);
            }}
            className={`link-menu ${active === 5 ? "active-link" : ""}`}
          >
            Города. Восток
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(6);
            }}
            className={`link-menu ${active === 6 ? "active-link" : ""}`}
          >
            Охота/рыбалка
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(7);
            }}
            className={`link-menu ${active === 7 ? "active-link" : ""}`}
          >
            Яхт-клубы/загородные клубы
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(8);
            }}
            className={`link-menu ${active === 8 ? "active-link" : ""}`}
          >
            Гольф/клубы
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(9);
            }}
            className={`link-menu ${active === 9 ? "active-link" : ""}`}
          >
            Отели/парки/заповедники
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              changeActiveHandler(10);
            }}
            className={`link-menu ${active === 10 ? "active-link" : ""}`}
          >
            Подарочные сертификаты
          </span>
        </li>
      </ul>
    </div>
  );
};
