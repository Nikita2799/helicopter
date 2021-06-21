import { CurrentRouterPage } from "../components/CurrentRouterPage/CurrentRouterPage";
import { LearnMain } from "../components/LearnHelComposition/LearnMain";
import { MainPage } from "../components/MainPage/MainPage";
import { RouterPage } from "../components/RouterPage/RouterPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainPage, routes: [] },
    { path: "/routers", exact: false, component: RouterPage, routes: [] },
    {
      path: "/current_router",
      exact: false,
      component: CurrentRouterPage,
      routes: [],
    },
    { path: "/study-fly", exact: false, component: LearnMain, routes: [] },
  ],
};
