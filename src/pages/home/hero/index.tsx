import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { hero, heroBackground } from "assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFire } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Hero: React.FC = () => {
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
        <div className={cx("content")}>
          <div className={cx("hello")}>
            <div className={cx("title")}>
              <h1
                style={{
                  color: theme === "dark" ? "var(--white)" : "var(--black)",
                }}
              >
                {t("hero.title")}
              </h1>
              <div className={cx("img")}>
                <img
                  src="https://media2.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=6c09b9525naakrhnxbhm11umldks61f6ogfikmgl5xiz3obh&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                  alt="hi"
                />
              </div>
            </div>
            <h1
              style={{
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              {t("hero.subtitle")} <span>{t("hero.name")}</span>
            </h1>
            <div className={cx("description")}>
              <h2>{t("hero.description")}</h2>
            </div>
          </div>
          <div className={cx("media")}>
            <a
              href="https://github.com/phu3112004"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/trangiangocphu/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/tgnphu311/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@tr.phu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          <div className={cx("buttons")}>
            <button className={cx("primary")}>
              {t("hero.button.skill")}
              <FontAwesomeIcon icon={faFire} />
            </button>
            <button className={cx("secondary")}>
              {t("hero.button.get")}
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className={cx("img")}>
          <img src={hero} alt="hero" />
        </div>
        <img className={cx("background")} src={heroBackground} alt="hero" />
      </div>
    </>
  );
};

export default Hero;
