import About from "pages/about";
import Home from "pages/home";
import Project from "pages/project";
export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/project",
    component: Project,
  },
];
