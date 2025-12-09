import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import GlobalContext from "./context/GlobalContext";

// Primereact CSS
//import 'primereact/resources/themes/saga-green/theme.css';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "flag-icons/css/flag-icons.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <GlobalContext>
        <PrimeReactProvider value={{ ripple: true }}>
          <App />
        </PrimeReactProvider>
      </GlobalContext>
    </HashRouter>
  </StrictMode>,
);
