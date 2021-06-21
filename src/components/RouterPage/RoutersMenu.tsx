import React from "react";

export const RoutersMenu: React.FC = () => {
  return (
    <div className="router-menu-wrapper">
      <ul>
        <li>
          <span>Экскурсионные полеты</span>
        </li>
        <li>
          <span>Популярные маршруты</span>
        </li>
        <li>
          <span>Города. Север</span>
        </li>
        <li>
          <span>Города. Запад</span>
        </li>
        <li>
          <span>Города. Юг</span>
        </li>
        <li>
          <span>Города. Восток</span>
        </li>
        <li>
          <span>Охота/рыбалка</span>
        </li>
        <li>
          <span>Яхт-клубы/загородные клубы</span>
        </li>
        <li>
          <span>Гольф/клубы</span>
        </li>
        <li>
          <span>Отели/парки/заповедники</span>
        </li>
        <li>
          <span>Подарочные сертификаты</span>
        </li>
      </ul>
    </div>
  );
};
