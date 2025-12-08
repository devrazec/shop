import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import GlobalContext from "./context/GlobalContext";

import App from "./App.tsx";

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import "flag-icons/css/flag-icons.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import './App.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <GlobalContext>
        <App />
      </GlobalContext>
    </HashRouter>
  </StrictMode>,
);
