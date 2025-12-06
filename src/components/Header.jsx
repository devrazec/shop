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
  ToggleButton, ToggleButtonGroup, NativeSelect,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkBar from "./LinkBar";
import SearchBar from "./SearchBar";

export default function Header() {

  const {
    darkMode,
    setDarkMode,
    portugalGeo,
    setPortugalGeo,
    filterOpen,
    setFilterOpen,
    flagOpen,
    setFlagOpen,
    selectedFlag,
    setSelectedFlag,
    flag,
    setFlag,
    hoveredId,
    setHoveredId,
    region,
    setRegion,
    selectedRegion,
    setSelectedRegion,
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
  } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const logoSrc = isSmallScreen
    ? "/shop/img/logo4.png" // smaller logo for mobile
    : "/shop/img/logo3.png";

  return (
    <AppBar position="static" sx={{ background: "#00453e" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* Hamburger - visible on small screens */}
        <IconButton
          sx={{ color: "white", display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box
          component="img"
          src={logoSrc}
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

          <FormControl sx={{ minWidth: 80, position: "relative" }}>
            <NativeSelect
              value={selectedFlag}
              onChange={(e) => setSelectedFlag(e.target.value)}
              disableUnderline
              sx={{
                // Colors & layout
                color: "white",
                fontSize: "16px",
                paddingLeft: "26px", // space for flag

                // Remove arrow
                "& select": {
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  paddingRight: "0px",
                  color: "white",

                },

                // Remove border completely
                "& .MuiNativeSelect-select": {
                  border: "none",
                },

                "& option": {
                  color: "white",
                },
              }}
            >
              <option value="EN">EN</option>
              <option value="PT">PT</option>
              <option value="ES">ES</option>
            </NativeSelect>

            {/* Flag inside the select, same size as text */}
            <span
              className={flag[selectedFlag]}
              style={{
                position: "absolute",
                left: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "16px",  // 🔥 same size as label
                lineHeight: "16px",
                pointerEvents: "none",
              }}
            />
          </FormControl>


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

      <LinkBar />

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
