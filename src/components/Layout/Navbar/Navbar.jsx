import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
const cx = classNames.bind(styles);

function Navbar() {
  return (
    <>
      <nav className={cx("wrapper")}>
        <div className={cx("logo")}>
          <img className={cx("logo__item")} src={logo} alt="Logo" />
        </div>
        <ul className={cx("menu")}>
          <Link className={cx("menu__item")} to="/">
            Home
          </Link>
          <Link className={cx("menu__item")} to="/product">
            Product
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
