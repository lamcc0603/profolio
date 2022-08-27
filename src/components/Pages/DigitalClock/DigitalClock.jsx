import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./DigitalClock.module.scss";

const cx = classNames.bind(styles);

function DigitalClock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timeCurrent = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timeCurrent);
    };
  }, []);

  return (
    <>
      <div className={cx("container")}>
        <div className={cx("clock")}>
          <div className={cx("clock__function")}>
            <div className={cx("clock__function__top")}>
              <p id={cx("day__current")}>
                {date.getHours() <= 12 ? "AM" : "PM"}
              </p>
            </div>
            <div className={cx("clock__function__bottom")}>
              <div className={cx("clock__function__countdown")}>
                <p className={cx("clock__function__icon")} id={cx("stopwatch")}>
                  <i className={cx("fa-solid fa-stopwatch-20")}></i>
                </p>
              </div>
              <div className={cx("clock__function__alarm")}>
                <p className={cx("clock__function__icon")}>
                  <i className={cx("fa-solid fa-clock")}></i>
                </p>
              </div>
            </div>
          </div>
          <div className={cx("clock__timer")}>
            <p className={cx("clock__timer__current")}>
              {date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
