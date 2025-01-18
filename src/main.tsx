import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "contexts/theme_context";
import GlobalStyle from "components/global_style";
import "./i18.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GlobalStyle>
  </StrictMode>
);
