import React, { useContext, useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { AutoComplete } from "primereact/autocomplete";
import { Sidebar } from 'primereact/sidebar';

import { Box, MenuItem, Select, Typography, Menu, Drawer, List, ListItem, ListItemText, IconButton, Divider } from "@mui/material";

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
        smallScreen,
        setSmallScreen,
        mobileMenu, setMobileMenu,
    } = useContext(GlobalContext);

    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <div className="surface-ground">
            {/* TOP BAR */}
            <div
                className="w-full px-3 py-1 flex align-items-center justify-content-between"
                style={{ background: "#003C32", color: "white" }}
            >
                {/* LEFT: Logo + Hamburger on Mobile */}
                <div className="flex align-items-center gap-3">
                    <i
                        className="pi pi-bars text-2xl cursor-pointer block lg:hidden"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    ></i>

                    <img
                        src={smallScreen ? "/shop/img/logo4.png" : "/shop/img/logo3.png"}
                        alt="logo"
                        style={{ height: "40px" }}
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
                            value={selectedProduct}
                            suggestions={filteredProducts}
                            completeMethod={(e) => {
                                const query = e.query.toLowerCase();
                                setFilteredProducts(
                                    rows.filter((p) =>
                                        p.product.toLowerCase().includes(query)
                                    )
                                );
                            }}
                            field="product"
                            itemTemplate={(item) => (
                                <div className="autocomplete-card">
                                    <img src={item.image} alt={item.product} />
                                    <strong>{item.product}</strong>
                                    <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                                        {item.category}
                                    </span>
                                    <span style={{ fontWeight: "bold" }}>{item.price}</span>
                                </div>
                            )}
                            placeholder="Search Products"
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
                                const selected = flag.find((f) => f.code === selectedFlag);
                                return (
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        {selected && (
                                            <span
                                                className={selected.icon}
                                                style={{ fontSize: 18 }}
                                            />
                                        )}
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                paddingLeft: "5px",
                                                color: "white",
                                            }}
                                        >
                                            {selected.code}
                                        </Typography>
                                    </Box>
                                );
                            }}
                            sx={{
                                width: 90,
                                "& .MuiSelect-select": {
                                    display: "flex",
                                    alignItems: "center",
                                },
                                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                                "& .MuiSelect-icon": { color: "white" },
                            }}
                        >
                            {flag.map((f) => (
                                <MenuItem key={f.code} value={f.code}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            className={f.icon}
                                            style={{ fontSize: 24, marginRight: 8 }}
                                        />
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




            {/* MOBILE FILTERS — MUI DRAWER */}
            <Sidebar
                visible={mobileMenu}
                onHide={() => setMobileMenu(false)}
                position="left"
                showCloseIcon={false}     // We will make a custom close button
                style={{
                    width: "80%",
                    maxWidth: "250px",
                    background: "#00473C",
                    color: "white",
                    padding: 0,            // Remove default padding
                }}
            >
                {/* HEADER */}
                <div
                    style={{
                        background: "#003C32",
                        color: "white",
                        padding: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <img
                            src="/shop/img/logo3.png"
                            alt="Logo"
                            style={{ paddingLeft: 8, height: 30 }}
                        />
                    </div>

                    {/* Close Button */}
                    <Button
                        icon="pi pi-times"
                        rounded outlined className="h-2rem w-2rem p-sidebar-icon p-link"
                        onClick={() => setMobileMenu(false)}
                        style={{
                            color: "white",
                            marginRight: "0.5rem",
                            fontSize: "1.3rem",
                            //background: "#00473C",
                        }}
                    />
                </div>

                {/* CONTENT */}
                <div style={{ padding: "1.5rem" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li className="p-mb-3 py-2">Deliver to</li>
                        <li className="p-mb-3 py-2">Language</li>
                        <li className="p-mb-3 py-2">Hello, sign in</li>
                        <li className="p-mb-3 py-2">Returns</li>
                    </ul>
                </div>
            </Sidebar>


        </div>
    );
}
