import { CurrentRouterPage } from "../components/CurrentRouterPage/CurrentRouterPage";
import { MainPage } from "../components/MainPage/MainPage";
import { RouterPage } from "../components/RouterPage/RouterPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainPage, routes: [] },
    { path: "/routers", exact: true, component: RouterPage, routes: [] },
    {
      path: "/current_router",
      exact: true,
      component: CurrentRouterPage,
      routes: [],
    },
  ],
};
