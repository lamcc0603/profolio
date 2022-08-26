import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Pages/Home/Home";
import Product from "./components/Pages/Product/Product";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
