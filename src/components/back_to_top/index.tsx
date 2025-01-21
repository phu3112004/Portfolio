import classNames from "classnames/bind";
import styles from "./BackToTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function BackToTop() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });
  }, []);
  return (
    <button
      style={{ display: isShow ? "flex" : "none" }}
      className={cx("container")}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default BackToTop;
