import classNames from "classnames/bind";
import styles from "./SkillItem.module.scss";
import { useTheme } from "contexts/theme_context";

const cx = classNames.bind(styles);

interface IProps {
  name: string;
  image: string;
}

function SkillItem({ name, image }: IProps) {
  const { theme } = useTheme();
  return (
    <div
      className={cx("item")}
      style={{
        backgroundColor:
          theme === "dark" ? "var(--blueberry)" : "var(--light-gray)",
        borderColor: theme === "dark" ? "var(--blue)" : "var(--gray)",
        color: theme === "dark" ? "var(--white)" : "var(--black)",
      }}
    >
      <img src={image} alt={name} />
      {name}
    </div>
  );
}

export default SkillItem;
