import React, { useContext } from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GlobalContext } from "../context/GlobalContext";

import MenuIcon from "@mui/icons-material/Menu";

export default function LinkBar() {
  const {
    /* your context variables */
  } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #014034",
        display: "flex",
        alignItems: "center",
        gap: 3,
        mt: 1,
        ml: 2,
        p: 1,
        bgcolor: "#014034",
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
        sx={{
          textTransform: "none",
          borderRadius: "999px",
          px: 2,
          whiteSpace: "nowrap",
          fontWeight: "bold",
          bgcolor: "#057642",
          color: "#fff",
          flexShrink: 0, // prevent shrinking in scroll
          "&:hover": { bgcolor: "#045c34" },
        }}
      >
        <Typography sx={{ color: "white" }}>All</Typography>
      </Button>

      {/* Pill Filters */}
      <Button
        variant="outlined"
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
        <Typography sx={{ color: "white" }}>Girls</Typography>
      </Button>

      <Button
        variant="outlined"
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
        <Typography sx={{ color: "white" }}>Boys</Typography>
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
        <Typography sx={{ color: "white" }}>Color</Typography>
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
