import Hero from "./hero";
import About from "./about";
import Experience from "./experience";
import Skill from "./skill";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "contexts/theme_context";

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "var(--dark-blue)" : "var(--white)",
        overflow: "hidden",
      }}
    >
      <Fade direction="up" cascade triggerOnce>
        <Hero />
      </Fade>
      <Fade direction="up" triggerOnce>
        <About />
      </Fade>
      <Fade direction="up" triggerOnce>
        <Experience />
      </Fade>
      <Fade direction="left" triggerOnce duration={2000}>
        <Skill />
      </Fade>
    </div>
  );
};
export default Home;
