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
import SkillItem from "components/skill_item";

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
            <SkillItem name="C++" image={cpp} />
            <SkillItem name="HTML" image={html} />
            <SkillItem name="CSS" image={css} />
            <SkillItem name="JavaScript" image={javascript} />
            <SkillItem name="PHP" image={php} />
            <SkillItem name="ReacJS" image={react} />
            <SkillItem name="NodeJS" image={node} />
            <SkillItem name="MySQL" image={mysql} />
            <SkillItem name="Bootstrap" image={bootstrap} />
            <SkillItem name="Sass" image={sass} />
            <SkillItem name="Git" image={git} />
            <SkillItem name="GitHub" image={github} />
            <SkillItem name="TypeScript" image={typescript} />
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Skill;
