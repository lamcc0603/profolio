import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);
function ProductItem({ url, name }) {
  return (
    <>
      <Link to={url}>
        <div className={cx("product__item")}>{name}</div>
      </Link>
    </>
  );
}

export default ProductItem;
