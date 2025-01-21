import classNames from "classnames/bind";
import styles from "./Project.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { pjR, pjRN, pjPHP, pjNode, pjYT, pjM } from "assets/index";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "components/project_card";

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
            <ProjectCard
              img={pjM}
              title="projects.project1.title"
              des="projects.project1.description"
              git="https://github.com/phu3112004/IE105-Malware-detection-web"
              demo="https://drive.google.com/file/d/1zIDtvx9B4phENiTKf0TdrIMqpqDM4tBB/view?usp=sharing"
            />

            <ProjectCard
              img={pjNode}
              title="projects.project2.title"
              des="projects.project2.description"
              git="https://github.com/phu3112004/fus-blog"
              demo="https://drive.google.com/file/d/1rVdX4dVpe0vKWZgw4zp3WN9t_wrW4hEW/view?usp=sharing"
            />
            <ProjectCard
              img={pjPHP}
              title="projects.project3.title"
              des="projects.project3.description"
              git="https://github.com/nhsmai04/IS207-SOLITEA"
              demo="https://drive.google.com/file/d/15KRJT_Fs7idL0UIb83sxhd4jM74lDIH9/view?usp=sharing"
            />
            <ProjectCard
              img={pjR}
              title="projects.project4.title"
              des="projects.project4.description"
              git="https://github.com/phu3112004/IE104_TravelWebsite_Project"
              demo="https://drive.google.com/file/d/1laVJ3Vv6_D3MA8F6hhNhomKLdXRVfQfl/view?usp=sharing"
            />
            <ProjectCard
              img={pjRN}
              title="projects.project5.title"
              des="projects.project5.description"
              git="https://github.com/phu3112004/IE307-Mobile"
              demo="https://drive.google.com/file/d/1UzQiL__eT8-ORzLAlaKJl0IWbfQwBZin/view?usp=drive_link"
            />
            <ProjectCard
              img={pjYT}
              title="projects.project6.title"
              des="projects.project6.description"
              git="https://github.com/phu3112004/FUANIME"
              demo="https://drive.google.com/file/d/1cMRScVjQr5iMb6Yn7OVYrKOr9FPrF-Iv/view?usp=drive_link"
            />
          </Fade>
        </div>
      </div>
    </>
  );
};
export default Project;
