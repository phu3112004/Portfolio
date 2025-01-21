import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultLayout from "layouts/default_layout";
import ScrollToTop from "components/scroll_to_top";
import BackToTop from "components/back_to_top";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayout>
                <route.component />
              </DefaultLayout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
