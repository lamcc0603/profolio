import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h1 className={cx("title")}>Application project</h1>
        <Link className={cx("btn__showmore")} to="/product">
          Show more
        </Link>
      </div>
    </>
  );
}

export default Home;
