import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import { publicRoutes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((routee, index) => {
          const Page = routee.component;

          return (
            <Route
              key={index}
              path={routee.path}
              element={<>{<Page />}</>}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
