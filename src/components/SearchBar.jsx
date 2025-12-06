import React, { useState, useContext } from "react";
import { TextField, Box, Avatar } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useDemoData } from "@mui/x-data-grid-generator";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

export default function SearchBarM() {
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

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
  });

  function getRandomLatLng(city) {
    const bounds = cityBounds[city];
    if (!bounds) return { lat: 0, lng: 0 };

    const lat = Math.random() * (bounds.latMax - bounds.latMin) + bounds.latMin;
    const lng = Math.random() * (bounds.lngMax - bounds.lngMin) + bounds.lngMin;

    return { lat, lng };
  }

  const randomId = () => {
    const id = uuidv4();
    return id;
  };

  // Build rows safely (guard when demo data hasn't loaded yet)
  const rows =
    data?.rows?.map((row, index) => {
      const location = city[Math.floor(Math.random() * city.length)];

      const { lat, lng } = getRandomLatLng(location);

      // Pick a random product from the product array
      const randomProduct = product[Math.floor(Math.random() * product.length)];

      return {
        id: row.id,
        product: randomProduct.name,
        seller: row.traderName,
        stock: row.quantity,
        price: "€ " + row.unitPrice,
        tax: row.feeRate,
        location,
        lat,
        lng,
        status: row.status,
        gender: randomProduct.gender,
        category: randomProduct.type,
        color: randomProduct.color,
        image: `/shop/img/product/${randomProduct.image}`,
      };
    }) ?? [];

  //console.log(rows);

  return (
    <Autocomplete
      sx={{ flex: 1 }}
      options={rows}
      // make label unique by including id (prevents duplicate React keys)
      getOptionLabel={(option) => `${option.product}`}
      // identify options by id for equality checks
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={selectedProduct}
      onChange={(event, newValue) => setSelectedProduct(newValue)}
      slotProps={{
        paper: {
          sx: {
            width: "100vw",
            maxWidth: "80vw", // or 100vw if you want true fullscreen
            height: "100vh", // full screen height
            maxHeight: "80vh", // or 100vh
            left: "0 !important",
            borderRadius: 1,
            padding: 2,
            overflow: "hidden", // ⬅️ important so children don't spill out
          },
        },
        listbox: {
          sx: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 2,
            maxHeight: "100%", // ⬅️ match parent height
            overflowY: "auto", // ⬅️ scroll *inside* the panel
            padding: 1,
          },
        },
      }}
      renderOption={(props, option) => {
        const { key, ...rest } = props;
        return (
          <li
            key={key.id}
            {...rest}
            style={{ display: "flex", justifyContent: "center", padding: 8 }}
          >
            <Box
              sx={{
                width: 220,
                border: "1px solid #ddd",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <Box
                component="img"
                src={option.image}
                sx={{ width: "100%", height: 140, objectFit: "cover" }}
              />
              <Box sx={{ p: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                  {option.product}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {option.seller}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {option.location}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4 }}>
                  {option.price}
                </div>
              </Box>
            </Box>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          hiddenLabel
          {...params}
          label=""
          placeholder="Search Shop"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            sx: {
              height: 40, // adjust total height
              //display: 'flex',
              //justifyContent: 'center',
              //alignItems: 'center',  // vertical centering
              "& input": {
                marginLeft: 1,
                marginBottom: 1, // remove extra padding
              },
            },
          }}
        />
      )}
    />
  );
}
