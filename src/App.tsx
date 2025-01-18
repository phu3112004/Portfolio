import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultLayout from "layouts/default_layout";

const App = () => {
  return (
    <Router>
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
