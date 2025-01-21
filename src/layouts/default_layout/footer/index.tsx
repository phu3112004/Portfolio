import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import {
  vscode,
  asus,
  npm,
  youtube,
  messenger,
  vite,
  zalo,
  googledrive,
  googletranslate,
  chatgpt,
} from "assets/index";

const cx = classNames.bind(styles);
function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cx("container")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--dark-blue)" : "var(--light-gray)",
          borderTopColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
        }}
      >
        <div className={cx("content")}>
          <div
            className={cx("content-left")}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <h1
              style={{
                borderBottomColor: theme === "dark" ? "white" : "black",
              }}
              className={cx("title")}
            >
              {t("footer.title")}
            </h1>
            <p>{t("footer.description")}</p>
          </div>
          <div
            className={cx("content-right")}
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <h1
              style={{
                borderBottomColor: theme === "dark" ? "white" : "black",
              }}
              className={cx("title")}
            >
              {t("footer.tool")}
            </h1>
            <div className={cx("content-right-icons")}>
              <img src={vscode} alt="vscode" />
              <img
                src={asus}
                alt="asus"
                style={{ backgroundColor: "var(--white)", borderRadius: "5px" }}
              />
              <img src={zalo} alt="zalo" />
              <img src={youtube} alt="youtube" />
              <img src={messenger} alt="messenger" />
              <img src={vite} alt="vite" />
              <img
                src={npm}
                alt="npm"
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "5px",
                }}
              />
              <img src={googledrive} alt="googledrive" />
              <img src={googletranslate} alt="googletranslate" />
              <img
                src={chatgpt}
                alt="chatgpt"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <h1
          className={cx("copy-right")}
          style={{ color: theme === "dark" ? "white" : "black" }}
        >
          &copy; {new Date().getFullYear() + " "}
          {t("footer.rights")}
        </h1>
      </div>
    </>
  );
}

export default Footer;
