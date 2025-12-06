import React, { useContext, useState, useRef } from "react";
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, OutlinedInput, Box, Chip, Button, Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ColorSelectorM() {

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
    } = useContext(GlobalContext);

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <>
            <Button
                ref={anchorRef}
                variant="outlined"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={() => setOpen(true)}
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


            <FormControl sx={{ display: "none" }}>
                <Select
                    multiple
                    open={open}
                    onClose={() => setOpen(false)}
                    value={selectedColor}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    MenuProps={{
                        anchorEl: anchorRef.current,
                        transformOrigin: { vertical: 'top', horizontal: 'left' },
                        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
                        PaperProps: { sx: { maxHeight: 300 } },
                    }}
                >
                    {color.map((c) => (
                        <MenuItem key={c} value={c}>
                            <Checkbox checked={selectedColor.indexOf(c) > -1} />
                            <ListItemText primary={c} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
