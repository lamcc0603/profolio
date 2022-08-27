import { Routes, Route } from "react-router-dom";
import { ProductRoute } from ".";
function ProductRouter() {
  return (
    <>
      {ProductRoute.map((item, index) => {
        return (
          <Route key={index} path={item.path}>
            {item.component}
          </Route>
        );
      })}
    </>
  );
}

export default ProductRouter;
