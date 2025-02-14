import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faClose,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "contexts/theme_context";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsShowMenu(false);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--border-bottom-color", "var(--blueberry)");
    } else {
      root.style.setProperty("--border-bottom-color", "var(--white");
    }
  }, [theme]);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsShowMenu(false);
    }
  }, [location]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    if (window.innerWidth <= 1023) {
      setIsShowMenu(false);
    }
  };

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleChangeMode = () => {
    toggleTheme();
    if (window.innerWidth <= 1023) {
      setIsShowMenu(false);
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: isScrolled
            ? theme === "dark"
              ? "var(--dark-blue)"
              : "var(--white)"
            : window.innerWidth <= 1023
            ? theme === "dark"
              ? "var(--dark-blue)"
              : "var(--white)"
            : "transparent",
          display: isShowMenu ? "flex" : "none",
          boxShadow: isScrolled ? "0 2px 4px rgba(37, 37, 37, 0.1)" : "none",
        }}
        className={cx("header")}
      >
        <div className={cx("header__menu")}>
          <ul>
            <li>
              <h1>
                <FontAwesomeIcon color="#cf3339" icon={faUserAstronaut} />
                {t("name")}
              </h1>
              <button className={cx("close")} onClick={showMenu}>
                <FontAwesomeIcon color="#cf3339" icon={faClose} />
              </button>
            </li>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive
                    ? theme === "dark"
                      ? "var(--white)"
                      : "var(--black)"
                    : "gray",
                })}
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive
                    ? theme === "dark"
                      ? "var(--white)"
                      : "var(--black)"
                    : "gray",
                })}
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                style={({ isActive }) => ({
                  color: isActive
                    ? theme === "dark"
                      ? "var(--white)"
                      : "var(--black)"
                    : "gray",
                })}
              >
                {t("project")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={cx("header__action")}>
          <ul>
            <li>
              <button className={cx("mode")} onClick={handleChangeMode}>
                <FontAwesomeIcon
                  color={theme === "dark" ? "var(--white)" : "var(--black)"}
                  icon={theme === "light" ? faSun : faMoon}
                />
              </button>
            </li>
            <li>
              <div className={cx("language")}>
                {i18n.language === "en" ? (
                  <img
                    src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png"
                    alt="en"
                  />
                ) : i18n.language === "vi" ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                    alt="vi"
                  />
                ) : (
                  <img
                    src="https://cdn.countryflags.com/thumbs/japan/flag-800.png"
                    alt="ja"
                  />
                )}
              </div>
              <ul
                className={cx("language__submenu")}
                style={{
                  backgroundColor:
                    theme === "dark" ? "var(--blueberry)" : "var(--white)",
                }}
              >
                <li
                  onClick={() => handleLanguageChange("en")}
                  style={{
                    color: theme === "dark" ? "var(--white)" : "var(--black)",
                  }}
                >
                  <img
                    src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png"
                    alt="en"
                  />
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("vi")}
                  style={{
                    color: theme === "dark" ? "var(--white)" : "var(--black)",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                    alt="vi"
                  />
                  Tiếng Việt
                </li>
                <li
                  onClick={() => handleLanguageChange("ja")}
                  style={{
                    color: theme === "dark" ? "var(--white)" : "var(--black)",
                  }}
                >
                  <img
                    src="https://cdn.countryflags.com/thumbs/japan/flag-800.png"
                    alt="ja"
                  />
                  日本語
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <header
        style={{
          backgroundColor:
            theme === "dark" ? "var(--dark-blue)" : "var(--white)",
          display: isShowMenu ? "none" : "flex",
          boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        }}
        className={cx("header__mobile")}
      >
        <div className={cx("header__mobile__menu")}>
          <h1>
            <FontAwesomeIcon color="#cf3339" icon={faUserAstronaut} />
            {t("name")}
          </h1>
          <button className={cx("menu-icon")} onClick={showMenu}>
            <FontAwesomeIcon color="#cf3339" icon={faBars} size="2x" />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
