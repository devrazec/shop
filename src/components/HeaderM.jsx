import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
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
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkBarM from "./LinkBarM";
import SearchBar from "./SearchBar";

export default function Header() {
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
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };



  return (
    <AppBar position="static" sx={{ background: "#003C32" }}>
      <Toolbar sx={{ mx: { xs: -1, sm: -1 }, display: "flex", alignItems: "center", gap: 2 }}>
        {/* Hamburger - visible on small screens */}
        <IconButton
          sx={{ color: "white", display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon style={{ fontSize: '30px' }} />
        </IconButton>

        {/* Logo */}
        <Box
          component="img"
          src={smallScreen ? "/shop/img/logo4.png" : "/shop/img/logo3.png"}
          alt="Company Logo"
          sx={{
            height: 40,
            width: "auto",
            mx: { xs: "auto", sm: 0 },
          }}
        />

        {/* Deliver to - hidden on small screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            color: "white",
          }}
        >
          <Typography variant="caption">Deliver to</Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Portugal
          </Typography>
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: 1,
            flex: 1,
          }}
        >
          <SearchBar />
        </Box>

        {/* Right section hidden on very small screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >

          {/* <FormControl sx={{ minWidth: 80, position: "relative" }}>
            <NativeSelect
              value={selectedFlag}
              onChange={(e) => setSelectedFlag(e.target.value)}
              disableUnderline
              sx={{
                color: "white",
                fontSize: "16px",
                paddingLeft: "26px",

                "& select": {
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  paddingRight: "0px",
                  color: "white",
                },

                "& .MuiNativeSelect-select": {
                  border: "none",
                  color: "white",
                },

                "& option": {
                  color: "white",
                },

                "& .MuiNativeSelect-iconStandard": {
                  color: "white",
                },

                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <option value="EN">EN</option>
              <option value="PT">PT</option>
              <option value="ES">ES</option>
            </NativeSelect>

            <span
              className={flag[selectedFlag]}
              style={{
                position: "absolute",
                left: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "16px",
                lineHeight: "16px",
                pointerEvents: "none",
              }}
            />
          </FormControl> */}

          <Select
            value={selectedFlag}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedFlag(value);
            }}
            displayEmpty
            renderValue={() => {
              const selected = flag.find(f => f.code === selectedFlag);
              return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {selected && <span className={selected.icon} style={{ fontSize: 18 }} />}
                  <Typography sx={{ fontWeight: 600, paddingLeft: "5px", color: "white" }}>{selected.code}</Typography>
                </Box>
              );
            }}
            sx={{
              width: 90,
              "& .MuiSelect-select": { display: "flex", alignItems: "center" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-icon": { color: "white" },
            }}
          >
            {flag.map((f) => (
              <MenuItem key={f.code} value={f.code}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span className={f.icon} style={{ fontSize: 24, marginRight: 8 }} />
                  <Typography>{f.name}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>

          <Box
            sx={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <Typography variant="caption">Hello, sign in</Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Account & Lists
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <Typography variant="caption">Returns</Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              & Orders
            </Typography>
          </Box>
        </Box>

        {/* Cart */}
        <IconButton>
          <Badge badgeContent={0} color="primary">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Toolbar>

      <LinkBarM />

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Hello, sign in" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Today's Deals" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Prime Video" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Registry" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Gift Cards" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Customer Service" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Sell" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
