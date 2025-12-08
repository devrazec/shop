import { useContext, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Materialui } from "./pages/Materialui";
import { Primereact } from "./pages/Primereact";
import { NotFound } from "./pages/NotFound";
import { GlobalContext } from "./context/GlobalContext";

// Material UI
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Typography,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  Button,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
  NativeSelect,
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  }
});

function App() {

  const {
    darkMode,
    smallScreen, setSmallScreen,
    setDarkMode,
    portugalGeo,
    setPortugalGeo,
    selectedFlag,
    setSelectedFlag,
    flag,
    setFlag,
    hoveredId,
    setHoveredId,
    location,
    setLocation,
    selectedLocation,
    setSelectedLocation,
    selectedProduct,
    setSelectedProduct,
    zoomView,
    setZoomView,
    initialView,
    setInitialView,
    city,
    setCity,
    cityBounds,
    setCityBounds,
    product,
    setProduct,
    color,
    setColor,
    category,
    setCategory,
    selectedColor,
    setSelectedColor,
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
    filterAll,
    setFilterAll,
    filterGirls,
    setFilterGirls,
    filterBoys,
    setFilterBoys,
  } = useContext(GlobalContext);

  const theme = useTheme();
  setSmallScreen(useMediaQuery(theme.breakpoints.down("sm")));

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
