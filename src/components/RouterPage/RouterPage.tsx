import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { UnderHeader } from "../Header/UnderHeader";
import "./router.sass";
import { RoutersMenu } from "./RoutersMenu";
import { ContainerContent } from "./ContainerContent";
import gift from "../../img/gift.svg";
export const RouterPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  return (
    <div className="router-page">
      <Header />
      <UnderHeader />
      <div className="top-line-wrapper">
        <h1 className="h1">Маршруты полетов</h1>
      </div>
      <div className="container-flex-wrapper">
        <RoutersMenu setActive={setActiveCategory} active={activeCategory} />
        <ContainerContent category={activeCategory} />
      </div>
      <div className="container-text-wrap">
        <div className="text-composition">
          <h5 className="h5">
            Приведённые выше расчёты являются ориентировочными и не учитывают:
          </h5>
          <ul>
            <li>
              <p>
                сборы за взлетно-посадочные операции на вертолётных площадках и
                аэродромах
              </p>
            </li>
            <li>
              <p>возможные дополнительные посадки для дозаправки</p>
            </li>
            <li>
              <p>
                изменение оптимальной трассы маршрута из-за возможного введения
                временных ограничений на полёты в воздушных зонах по которым
                проходит оптимальная трасса и др
              </p>
            </li>
          </ul>
          <p>
            Для точного расчёта обращайтесь к сотрудникам HeliLuxury Москва по
            телефону <strong>+ 7 (495) 77-000-77</strong>{" "}
          </p>
        </div>
        <div className="gifts-card">
          <h2 className="h2">Подарочные сертификаты</h2>
          <div className="container-flex">
            <div className="image-wrapper">
              <img src={gift} alt="" />
            </div>
            <div className="text-wrapper">
              <p>
                Наша авиокомпания предлагает приобрести подарочный сертификат на
                любой экскурсионный полет или полет по индивидуальному маршруту.
                Вылет из Heliluxury Москва - это комфорт и удобство современного
                вертолетного центра.Наслаждайтесь впечатлениями, свободой
                передвижения и безграничными возможностями вертолета.
              </p>
              <span className="btn-order-card">Заказать</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
