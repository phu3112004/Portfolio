import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import Lottie from "lottie-react";
import { coder, contact, education } from "assets/index";
import Card from "components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { Fade } from "react-awesome-reveal";

const cx = classNames.bind(styles);
type lang = "en" | "vi" | "ja";

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const quotes = {
    en: "Success is not the key to happiness. Happiness is the key to success.",
    vi: "Thành công không phải là chìa khóa của hạnh phúc. Hạnh phúc là chìa khóa của thành công.",
    ja: "成功は幸せの鍵ではない。幸せが成功の鍵だ。",
    author: {
      en: "Albert Einstein",
      vi: "An-bớt Anh-xtanh",
      ja: "アルベルト・アインシュタイン",
    },
  };
  const lang = i18n.language as lang;
  const quote = quotes[lang];
  const author = quotes.author[lang];
  return (
    <div
      className={cx("container")}
      style={{
        backgroundColor:
          theme === "light" ? "var(--white)" : "var(--dark-blue)",
      }}
    >
      <div className={cx("row")}>
        <div className={cx("col", "know")}>
          <h1>{t("know.title")}</h1>
          <div
            className={cx("know-content")}
            style={{
              color: theme === "light" ? "var(--black)" : "var(--white)",
            }}
          >
            <Fade direction="left" triggerOnce>
              <p>{t("know.line1")}</p>
              <p>{t("know.line2")}</p>
              <p>{t("know.line3")}</p>
              <p>{t("know.line4")}</p>
              <p>{t("know.line5")}</p>
              <ul>
                <li>
                  <p>{t("know.activities.activity1")}</p>
                </li>
                <li>
                  <p>{t("know.activities.activity2")}</p>
                </li>
                <li>
                  <p>{t("know.activities.activity3")}</p>
                </li>
                <li>
                  <p>{t("know.activities.activity4")}</p>
                </li>
              </ul>
              <p>{t("know.line6")}</p>
              <p
                style={{
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "var(--pink)",
                }}
              >
                "{quote}"
              </p>
              <p style={{ textAlign: "center", color: "var(--pink)" }}>
                ー {author} ー
              </p>
            </Fade>
          </div>
        </div>
        <div className={cx("col")}>
          <Fade direction="right" triggerOnce>
            <Lottie animationData={coder} loop={true} />
          </Fade>
        </div>
      </div>
      <div className={cx("row", "education-row")}>
        <div className={cx("col")}>
          <Fade direction="left" triggerOnce>
            <Lottie animationData={education} loop={true} />
          </Fade>
        </div>
        <div className={cx("col", "education")}>
          <Fade direction="right" triggerOnce>
            <h1 className={cx("education-title")}>{t("education.title")}</h1>
            <Card
              time="education.time"
              title="education.major"
              icon={faGraduationCap}
              company="education.school"
            />
          </Fade>
        </div>
      </div>
      <div className={cx("row", "contact-row")}>
        <div
          className={cx("col", "contact")}
          style={{ color: theme === "light" ? "var(--black)" : "var(--white)" }}
        >
          <h1>{t("find")}</h1>
          <div className={cx("contact-info")}>
            <a
              href="https://github.com/phu3112004"
              target="_blank"
              rel="noreferrer"
              className={cx("item")}
            >
              <FontAwesomeIcon icon={faGithub} />
              <p>GitHub</p>
            </a>
            <a
              href="https://www.facebook.com/trangiangocphu/"
              target="_blank"
              rel="noreferrer"
              className={cx("item")}
            >
              <FontAwesomeIcon icon={faFacebook} />
              <p>Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/tgnphu311/"
              target="_blank"
              rel="noreferrer"
              className={cx("item")}
            >
              <FontAwesomeIcon icon={faInstagram} />
              <p>Instagram</p>
            </a>
            <a
              href="https://www.tiktok.com/@tr.phu"
              target="_blank"
              rel="noreferrer"
              className={cx("item")}
            >
              <FontAwesomeIcon icon={faTiktok} />
              <p>TikTok</p>
            </a>
          </div>
          <div className={cx("contact-info")}>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faPhone} />
              <p>0923873163</p>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>22521105@gm.uit.edu.vn</p>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {t("address")}
            </div>
          </div>
        </div>
        <div className={cx("col", "contact-image")}>
          <Fade direction="right" triggerOnce>
            <h1 className={cx("contact-image-title")}>{t("contact")}</h1>
            <Lottie animationData={contact} loop={true} />
            {/* <img src={contact} alt="contact" style={{ width: "100%" }} /> */}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
