import DigitalClock from "../components/Pages/DigitalClock/DigitalClock";
import Home from "../components/Pages/Home/Home";
import Product from "../components/Pages/Product/Product";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/product/digitalClock",
    component: DigitalClock,
  },
];
