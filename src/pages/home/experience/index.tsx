import classNames from "classnames/bind";
import styles from "./Experience.module.scss";
import Lottie from "lottie-react";
import { computer } from "assets/index";
import {
  faBriefcase,
  faLaptopCode,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "contexts/theme_context";
import { Fade } from "react-awesome-reveal";
import Card from "components/card";

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
              <Card
                time="cards.card1.time"
                title="cards.card1.title"
                company="cards.card1.company"
                icon={faBriefcase}
              />
              <Card
                time="cards.card2.time"
                title="cards.card2.title"
                company="cards.card2.company"
                icon={faComputer}
              />
              <Card
                time="cards.card3.time"
                title="cards.card3.title"
                company="cards.card3.company"
                icon={faLaptopCode}
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
