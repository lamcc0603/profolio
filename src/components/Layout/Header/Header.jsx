import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Navbar from "../Navbar/Navbar";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div>
      <div className={cx("wrapper")}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
