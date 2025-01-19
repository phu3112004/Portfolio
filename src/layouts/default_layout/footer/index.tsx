import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";

const cx = classNames.bind(styles);
function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cx("container")}
        style={{ backgroundColor: theme === "dark" ? "#0e091c" : "#f0f0f0" }}
      >
        <h1
          className={cx("content")}
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          {t("footer")}
        </h1>
      </div>
    </>
  );
}

export default Footer;
