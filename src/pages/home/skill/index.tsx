import classNames from "classnames/bind";
import Marquee from "react-fast-marquee";
import styles from "./Skill.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import {
  cpp,
  html,
  css,
  javascript,
  php,
  react,
  node,
  mysql,
  bootstrap,
  sass,
  git,
  github,
  typescript,
} from "assets/index";

const cx = classNames.bind(styles);

function Skill() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        id="skill-section"
        className={cx("container")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--dark-blue)" : "var(--white)",
        }}
      >
        <div className={cx("skill")}>
          <h1 className={cx("title")}>{t("skill")}</h1>
          <Marquee
            gradient={false}
            speed={120}
            pauseOnHover={true}
            className={cx("marquee")}
          >
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={cpp} alt="C++" />
              C++
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={php} alt="PHP" />
              PHP
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={html} alt="HTML" />
              HTML
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={css} alt="CSS" />
              CSS
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={javascript} alt="Javascript" />
              Javascript
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={typescript} alt="ts" />
              Typescript
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={react} alt="React" />
              ReactJS
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={node} alt="NodeJS" />
              NodeJS
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={mysql} alt="MySQL" />
              MySQL
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={bootstrap} alt="Bootstrap" />
              Bootstrap
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={sass} alt="Sass" />
              Sass
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={git} alt="Git" />
              Git
            </div>
            <div
              className={cx("item")}
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
                borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <img src={github} alt="Github" />
              Github
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Skill;
