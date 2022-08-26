import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
console.log(cx);

function Header() {
  return (
    <div>
      <div className={cx("wrapper")}>12213</div>
    </div>
  );
}

export default Header;
