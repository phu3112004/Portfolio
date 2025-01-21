import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";

const cx = classNames.bind(styles);

interface IProps {
  time: string;
  title: string;
  company: string;
  icon: any;
}

function Card({ title, company, time, icon }: IProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className={cx("card")}>
      <div
        className={cx("card-container")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
        }}
      >
        <h2 className={cx("time")}>{t(time)}</h2>
        <div className={cx("content")}>
          <div className={cx("content-icon")}>
            <FontAwesomeIcon icon={icon} className={cx("icon")} />
          </div>
          <div className={cx("content-text")}>
            <h3
              style={{
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              {t(title)}
            </h3>
            <p
              style={{
                color: theme === "dark" ? "var(--light-gray)" : "var(--black)",
              }}
            >
              {t(company)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
