import classNames from "classnames/bind";
import styles from "./ProjectCard.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

interface IProps {
  img: string;
  title: string;
  des: string;
  git: string;
  demo: string;
}

function ProjectCard({ img, title, des, git, demo }: IProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div
      className={cx("card")}
      style={{
        borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
        boxShadow:
          theme === "dark" ? "0 0 10px var(--blue)" : "0 0 10px var(--gray)",
      }}
    >
      <div className={cx("image")}>
        <img src={img} alt="project" />
      </div>
      <div
        className={cx("introduce")}
        style={{
          color: theme === "dark" ? "var(--white)" : "var(--black)",
        }}
      >
        <h2>{t(title)}</h2>
        <p>{t(des)}</p>
      </div>
      <div className={cx("buttons")}>
        <a href={git} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          <p>GitHub</p>
        </a>
        <a href={demo} target="_blank">
          <FontAwesomeIcon icon={faVrCardboard} />
          <p>Demo</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
