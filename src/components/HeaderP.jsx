import React, { useContext, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/Dropdown";
import { AutoComplete } from "primereact/AutoComplete";

import {
    Box,
    MenuItem,
    Select,
    Typography,
    Menu,
} from "@mui/material";

import { GlobalContext } from "../context/GlobalContext";
import LinkBarP from "./LinkBarP";

export default function HeaderP() {

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

    const [searchValue, setSearchValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);



    const completeSearch = (event) => {
        const suggestions = ["Shoes", "Shirts", "Toys", "Laptops", "Books"];
        setFiltered(
            suggestions.filter(item =>
                item.toLowerCase().includes(event.query.toLowerCase())
            )
        );
    };



    return (
        <div className="surface-ground">
            {/* TOP BAR */}
            <div
                className="w-full px-3 py-2 flex align-items-center justify-content-between"
                style={{ background: "#003C32", color: "white" }}
            >
                {/* LEFT: Logo + Hamburger on Mobile */}
                <div className="flex align-items-center gap-3">
                    <i
                        className="pi pi-bars text-2xl cursor-pointer block lg:hidden"
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    ></i>

                    <img
                        src="/shop/img/logo3.png"
                        alt="logo"
                        style={{ height: "40px" }}
                        className="hidden lg:block"
                    />
                </div>

                {/* LEFT OF SEARCH — Deliver To */}
                <div className="hidden lg:flex text-sm flex-column ml-3 cursor-pointer">
                    <div>Deliver to</div>
                    <div className="font-bold">Portugal</div>
                </div>

                {/* SEARCH WITH AUTOCOMPLETE */}
                <div className="flex-1 mx-3">
                    <div className="flex">
                        <AutoComplete
                            value={searchValue}
                            suggestions={filtered}
                            completeMethod={completeSearch}
                            onChange={(e) => setSearchValue(e.value)}
                            placeholder="Search Shop"
                            className="w-full"
                            inputClassName="w-full p-inputtext-lg py-2 text-lg border-round-md pl-2"
                        />
                    </div>
                </div>

                {/* RIGHT SECTION (hidden on mobile) */}
                <div className="hidden lg:flex align-items-center gap-5">

                    <div className="flex align-items-center gap-1">

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


                    </div>

                    <div className="text-sm text-left cursor-pointer">
                        <div>Hello, sign in</div>
                        <div className="font-bold">Account & Lists</div>
                    </div>

                    <div className="text-sm text-left cursor-pointer">
                        <div>Returns</div>
                        <div className="font-bold">& Orders</div>
                    </div>

                    <i className="pi pi-shopping-cart text-2xl cursor-pointer"></i>
                </div>

                {/* MOBILE CART ICON */}
                <i className="pi pi-shopping-cart text-2xl cursor-pointer lg:hidden"></i>
            </div>

            <LinkBarP />

            {/* MOBILE FILTERS */}
            {mobileFiltersOpen && (
                <div
                    className="w-full px-3 py-3 gap-2 flex flex-column lg:hidden"
                    style={{ background: "#00473C", color: "white" }}
                >
                    <Button label="All" rounded className="mb-2" />
                    <Button label="Girls" rounded outlined className="mb-2" />
                    <Button label="Boys" rounded outlined className="mb-2" />
                    <Button label="Color" icon="pi pi-angle-down" iconPos="right" rounded outlined className="mb-2" />
                    <Button label="Category" icon="pi pi-angle-down" iconPos="right" rounded outlined className="mb-2" />
                    <Button label="Location" icon="pi pi-angle-down" iconPos="right" rounded outlined className="mb-2" />
                    <Button label="Brand" icon="pi pi-angle-down" iconPos="right" rounded outlined />
                </div>
            )}
        </div>
    );
}
