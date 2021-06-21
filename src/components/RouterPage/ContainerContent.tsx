import React, { useEffect, useState } from "react";
import { routersObject } from "../CurrentRouterPage/routersObject";
import { ItemRouter } from "./ItemRouter";
type TProps = {
  category: number;
};
export const ContainerContent: React.FC<TProps> = ({ category }) => {
  const [data, setData] = useState<any>();
  console.log(data);

  useEffect(() => {
    const newData = routersObject.filter((e) => e.category === category);
    setData(newData);
  }, [category]);
  return (
    <div className="container-content">
      {data ? (
        data.length > 0 ? (
          data.map((e: any, i: any) => <ItemRouter key={i} content={e} />)
        ) : (
          <h3>На данный момент в этой категории нет маршрутов</h3>
        )
      ) : (
        ""
      )}
    </div>
  );
};
