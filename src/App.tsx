import { useContext, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalContext } from "./context/GlobalContext";

// Material UI
import { useMediaQuery, useTheme, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { Home } from "./pages/Home";
import { Materialui } from "./pages/Materialui";
import { Primereact } from "./pages/Primereact";
import { NotFound } from "./pages/NotFound";

import "./App.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const { darkMode, setSmallScreen } = useContext(GlobalContext);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  // ⭐ FIX: update context AFTER render, not during
  useEffect(() => {
    setSmallScreen(isSmall);
  }, [isSmall, setSmallScreen]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/materialui" element={<Materialui />} />
          <Route path="/primereact" element={<Primereact />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
