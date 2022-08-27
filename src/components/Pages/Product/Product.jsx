import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles);
function Product() {
  return (
    <>
      <div className={cx("product__list")}>
        <ProductItem url={"digitalClock"} name={"digitalClock"} />
        <ProductItem url={"calculator"} name={"calculator"} />
        <ProductItem url={"weather"} name={"weather"} />
      </div>
    </>
  );
}

export default Product;
