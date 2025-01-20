import classNames from "classnames/bind";
import styles from "./Project.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { pjR, pjRN, pjPHP, pjNode, pjYT, pjM } from "assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const cx = classNames.bind(styles);

const Project: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cx("container")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--dark-blue)" : "var(--white)",
        }}
      >
        <div
          className={cx("title")}
          style={{ color: theme === "dark" ? "var(--white)" : "var(--black)" }}
        >
          <Fade direction="up" triggerOnce>
            <h1 className={cx("title-heading")}>
              {t("some")}
              <span>{t("project")}</span>
            </h1>
            <p className={cx("title-sub")}>{t("sub-project")}</p>
          </Fade>
        </div>

        <div className={cx("content")}>
          <Fade direction="up" triggerOnce>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjM} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project1.title")}</h2>
                <p>{t("projects.project1.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a
                  href="https://github.com/phu3112004/IE105-Malware-detection-web"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1zIDtvx9B4phENiTKf0TdrIMqpqDM4tBB/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjNode} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project2.title")}</h2>
                <p>{t("projects.project2.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a
                  href="https://github.com/phu3112004/fus-blog"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1rVdX4dVpe0vKWZgw4zp3WN9t_wrW4hEW/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjPHP} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project3.title")}</h2>
                <p>{t("projects.project3.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a
                  href="https://github.com/nhsmai04/IS207-SOLITEA"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/15KRJT_Fs7idL0UIb83sxhd4jM74lDIH9/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjR} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project4.title")}</h2>
                <p>{t("projects.project4.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a
                  href="https://github.com/phu3112004/IE104_TravelWebsite_Project"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1laVJ3Vv6_D3MA8F6hhNhomKLdXRVfQfl/view?usp=sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjRN} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project5.title")}</h2>
                <p>{t("projects.project5.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a
                  href="https://github.com/phu3112004/IE307-Mobile"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1UzQiL__eT8-ORzLAlaKJl0IWbfQwBZin/view?usp=drive_link"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
            <div
              className={cx("card")}
              style={{
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 10px var(--blue)"
                    : "0 0 10px var(--gray)",
              }}
            >
              <div className={cx("image")}>
                <img src={pjYT} alt="project" />
              </div>
              <div
                className={cx("introduce")}
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                <h2>{t("projects.project6.title")}</h2>
                <p>{t("projects.project6.description")}</p>
              </div>
              <div className={cx("buttons")}>
                <a href="https://github.com/phu3112004/FUANIME" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>GitHub</p>
                </a>
                <a
                  href="https://drive.google.com/file/d/1cMRScVjQr5iMb6Yn7OVYrKOr9FPrF-Iv/view?usp=drive_link"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faVrCardboard} />
                  <p>Demo</p>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Project;
