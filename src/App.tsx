import React from "react";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";

function App() {
  return (
    <div className="App">
      <RoutesContext.Provider value={useRoutes}>
        <MainRoutes />
      </RoutesContext.Provider>
    </div>
  );
}

export default App;
