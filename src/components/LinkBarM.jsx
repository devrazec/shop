import React, { useContext, useState } from "react";
import { Box, Button, Divider, IconButton, Typography, Menu, MenuItem, } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GlobalContext } from "../context/GlobalContext";
import ColorSelectorM from "./ColorSelectorM";

import MenuIcon from "@mui/icons-material/Menu";

export default function LinkBarM() {
  const {
    darkMode,
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
    smallScreen, setSmallScreen,
  } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #014034",
        display: "flex",
        alignItems: "center",
        gap: 3,
        paddingLeft: 2,
        paddingTop: 1,
        paddingBottom: 1,
        bgcolor: "#00473C",
        overflowX: { xs: "auto", sm: "auto" }, // scroll on small screens only
        scrollbarWidth: "thin", // Firefox
        "&::-webkit-scrollbar": {
          // Chrome/Safari
          height: 6,
        },
      }}
    >
      {/* Active Filter (Green) */}
      <Button
        variant="outlined"
        onClick={() => setFilterAll(true)}
        sx={{
          textTransform: "none",
          minWidth: '80px',
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          bgcolor: "#057642",
          color: "#fff",
          borderColor: "#ccc",
          flexShrink: 0, // prevent shrinking in scroll
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>All</Typography>
      </Button>

      {/* Pill Filters */}
      <Button
        variant="outlined"
        onClick={() => setFilterGirls(true)}
        sx={{
          textTransform: "none",
          minWidth: '80px',
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          color: "#FFF",
          borderColor: "#ccc",
          flexShrink: 0,
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>Girls</Typography>
      </Button>

      <Button
        variant="outlined"
        onClick={() => setFilterBoys(true)}
        sx={{
          textTransform: "none",
          minWidth: '80px',
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          color: "#FFF",
          borderColor: "#ccc",
          flexShrink: 0,
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>Boys</Typography>
      </Button>

      <ColorSelectorM />

      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          color: "#FFF",
          borderColor: "#ccc",
          flexShrink: 0,
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>Category</Typography>
      </Button>

      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          color: "#FFF",
          borderColor: "#ccc",
          flexShrink: 0,
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>Location</Typography>
      </Button>

      <Button
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          color: "#FFF",
          borderColor: "#ccc",
          flexShrink: 0,
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>Brand</Typography>
      </Button>
    </Box>
  );
}
