import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { heroBackground } from "assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faFire,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia, coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const cx = classNames.bind(styles);
const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const codeString = `
  const developer = {
    name: '${t("hero.name")}',
    skills: ['React', 'Redux', 'NextJS', 'NodeJS',
    'NestJS', 'NoSQL', 'SQL'],
    hardworker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return (
        this.hardworker && 
        this.problemSolver && 
        this.skills.length >= 5
      );
    }
  };
  `;
  const handleGetResume = () => {
    window.open(
      "https://drive.google.com/file/d/16MkloixyLGnSLUb3mkhbWU3RQDCn9MCr/view?usp=sharing",
      "_blank"
    );
  };

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
            <button
              className={cx("primary")}
              onClick={() =>
                document
                  .getElementById("skill-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("hero.button.skill")}
              <FontAwesomeIcon icon={faFire} />
            </button>
            <button onClick={handleGetResume} className={cx("secondary")}>
              {t("hero.button.get")}
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
        <div className={cx("code")}>
          <div
            className={cx("bar")}
            style={{
              backgroundColor:
                theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
            }}
          >
            <FontAwesomeIcon icon={faCircle} className={cx("circle")} />
            <FontAwesomeIcon icon={faCircle} className={cx("circle")} />
            <FontAwesomeIcon icon={faCircle} className={cx("circle")} />
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={theme === "dark" ? okaidia : coy}
            customStyle={{
              backgroundColor:
                theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <img className={cx("background")} src={heroBackground} alt="hero" />
      </div>
    </>
  );
};

export default Hero;
