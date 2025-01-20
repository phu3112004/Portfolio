import classNames from "classnames/bind";
import styles from "./Experience.module.scss";
import Lottie from "lottie-react";
import { computer } from "assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLaptopCode,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { Fade } from "react-awesome-reveal";

const cx = classNames.bind(styles);

function Experience() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cx("experience")}
        style={{
          backgroundColor:
            theme === "light" ? "var(--white)" : "var(--dark-blue)",
        }}
      >
        <h1 className={cx("title")}>{t("experience")}</h1>
        <div className={cx("container")}>
          <div className={cx("image")}>
            <Fade direction="left" triggerOnce>
              <Lottie animationData={computer} loop={true} />
            </Fade>
          </div>
          <div className={cx("content")}>
            <Fade direction="right" triggerOnce>
              <div className={cx("card")}>
                <div
                  className={cx("card-container")}
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "var(--blueberry)"
                        : "var(--light-gray)",
                  }}
                >
                  <h2 className={cx("time")}>{t("cards.card1.time")}</h2>
                  <div className={cx("content")}>
                    <div className={cx("content-icon")}>
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className={cx("icon")}
                      />
                    </div>
                    <div className={cx("content-text")}>
                      <h3
                        style={{
                          color:
                            theme === "dark" ? "var(--white)" : "var(--black)",
                        }}
                      >
                        {t("cards.card1.title")}
                      </h3>
                      <p
                        style={{
                          color:
                            theme === "dark"
                              ? "var(--light-gray)"
                              : "var(--black)",
                        }}
                      >
                        {t("cards.card1.company")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("card")}>
                <div
                  className={cx("card-container")}
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "var(--blueberry)"
                        : "var(--light-gray)",
                  }}
                >
                  <h2 className={cx("time")}>{t("cards.card2.time")}</h2>
                  <div className={cx("content")}>
                    <div className={cx("content-icon")}>
                      <FontAwesomeIcon
                        icon={faComputer}
                        className={cx("icon")}
                      />
                    </div>
                    <div className={cx("content-text")}>
                      <h3
                        style={{
                          color:
                            theme === "dark" ? "var(--white)" : "var(--black)",
                        }}
                      >
                        {t("cards.card2.title")}
                      </h3>
                      <p
                        style={{
                          color:
                            theme === "dark"
                              ? "var(--light-gray)"
                              : "var(--black)",
                        }}
                      >
                        {t("cards.card2.company")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("card")}>
                <div
                  className={cx("card-container")}
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "var(--blueberry)"
                        : "var(--light-gray)",
                  }}
                >
                  <h2 className={cx("time")}>{t("cards.card3.time")}</h2>
                  <div className={cx("content")}>
                    <div className={cx("content-icon")}>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className={cx("icon")}
                      />
                    </div>
                    <div className={cx("content-text")}>
                      <h3
                        style={{
                          color:
                            theme === "dark" ? "var(--white)" : "var(--black)",
                        }}
                      >
                        {t("cards.card3.title")}
                      </h3>
                      <p
                        style={{
                          color:
                            theme === "dark"
                              ? "var(--light-gray)"
                              : "var(--black)",
                        }}
                      >
                        {t("cards.card3.company")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
