import classNames from "classnames/bind";
import styles from "./About.module.scss";
import { aboutAvt } from "assets/index";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";

const cx = classNames.bind(styles);

function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cx("about")}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--dark-blue)" : "var(--white)",
        }}
      >
        <div
          className={cx("container")}
          style={{
            backgroundColor:
              theme === "dark" ? "var(--dark-blue)" : "var(--white)",
          }}
        >
          <div className={cx("content")}>
            <div
              className={cx("title")}
              style={{
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <h1>
                {t("about-me.title.let")}
                <span className={cx("highlight")}>
                  {t("about-me.title.introduce")}
                </span>
                {t("about-me.title.myself")}
              </h1>
            </div>
            <div className={cx("content-image")}>
              <img src={aboutAvt} alt="about" />
            </div>
            <div
              className={cx("description")}
              style={{
                color: theme === "dark" ? "var(--white)" : "var(--black)",
              }}
            >
              <Fade direction="left" triggerOnce>
                <p>{t("about-me.description.line1")}</p>
                <p>
                  {t("about-me.description.line2.part1")}
                  <span className={cx("highlight")}>
                    {t("about-me.description.line2.part2")}
                  </span>
                  {t("about-me.description.line3.part3")}
                  <span className={cx("highlight")}>
                    {t("about-me.description.line2.part3")}
                  </span>
                  {t("about-me.description.line2.part4")}
                  <span className={cx("highlight")}>
                    {t("about-me.description.line2.part5")}
                  </span>
                  {t("about-me.description.line2.part6")}
                </p>
                <p>
                  {t("about-me.description.line3.part1")}
                  <span className={cx("highlight")}>
                    {t("about-me.description.line3.part2")}
                  </span>
                  {t("about-me.description.line3.part3")}
                  <span className={cx("highlight")}>
                    {t("about-me.description.line3.part4")}
                  </span>
                  {t("about-me.description.line3.part5")}
                </p>
                <p>{t("about-me.description.line4")}</p>
              </Fade>
            </div>
          </div>
          <div className={cx("image")}>
            <Tilt
              tiltMaxAngleX={20} // Góc tối đa khi rê chuột theo chiều X
              tiltMaxAngleY={20} // Góc tối đa khi rê chuột theo chiều Y
              perspective={1000} // Tạo chiều sâu cho hiệu ứng
              transitionSpeed={300} // Thời gian chuyển động mượt mà
              scale={1.1} // Tỉ lệ phóng đại khi hover
            >
              <img src={aboutAvt} alt="about" className={cx("img")} />
            </Tilt>
            <Link to="/about" className={cx("link")}>
              {t("about")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
