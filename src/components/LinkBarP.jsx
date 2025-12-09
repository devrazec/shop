import React, { useContext } from "react";

import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";
import { MultiSelect } from "primereact/multiselect";

import { Box, MenuItem, Select, Typography, Menu } from "@mui/material";

import { GlobalContext } from "../context/GlobalContext";

export default function LinkBarP() {
  const {
    filterAll,
    setFilterAll,

    filterGirls,
    setFilterGirls,

    filterBoys,
    setFilterBoys,

    smallScreen,
    setSmallScreen,

    color,
    setColor,
    selectedColor,
    setSelectedColor,

    city,
    setCity,
    selectedCity,
    setSelectedCity,

    category,
    setCategory,
    selectedCategory,
    setSelectedCategory,

    seler,
    setSeler,
    selectedSeler,
    setSelectedSeler,

    mobileMenu,
    setMobileMenu,
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
        overflowX: { xs: "auto", sm: "auto" },
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          // Chrome/Safari
          height: 6,
        },
      }}
    >
      <SelectButton
        value={filterAll ? "All" : null}
        onChange={(e) => setFilterAll(e.value === "All")}
        options={["All"]}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterAll && option === "All";
          return (
            <span
              style={{
                display: "inline-block",
                minWidth: "80px",
                textAlign: "center",
                padding: "0.36rem 1rem",
                borderRadius: "999px",
                backgroundColor: isActive ? "#057642" : "#00473C",
                color: "white",
                cursor: "pointer",
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      <SelectButton
        value={filterGirls ? "Girls" : null}
        onChange={(e) => setFilterGirls(e.value === "Girls")}
        options={["Girls"]}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterGirls && option === "Girls";
          return (
            <span
              style={{
                display: "inline-block",
                minWidth: "80px",
                textAlign: "center",
                padding: "0.36rem 1rem",
                borderRadius: "999px",
                backgroundColor: isActive ? "#057642" : "#00473C",
                color: "white",
                cursor: "pointer",
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      <SelectButton
        value={filterBoys ? "Boys" : null}
        onChange={(e) => setFilterBoys(e.value === "Boys")}
        options={["Boys"]}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterBoys && option === "Boys";
          return (
            <span
              style={{
                display: "inline-block",
                minWidth: "80px",
                textAlign: "center",
                padding: "0.36rem 1rem",
                borderRadius: "999px",
                backgroundColor: isActive ? "#057642" : "#00473C",
                color: "white",
                cursor: "pointer",
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      {/* Category */}
      <div className="p-field">
        <MultiSelect
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.value)}
          options={category}
          optionLabel="label"
          showClear={true}
          placeholder="Category"
          selectedItemsLabel="Category {0}"
          maxSelectedLabels={0}
          className="w-full px-3 text-base text-white"
          panelClassName="custom-multiselect-panel"
          panelStyle={{ marginTop: "10px" }}
          style={{
            borderRadius: "999px",
            padding: "0.36rem",
            backgroundColor:
              selectedCategory.length > 0 ? "#057642" : "#00473C",
            borderColor: "#ccc",
            border: "1px solid white",
            color: "white",
            minWidth: "170px",
          }}
          itemTemplate={(option) => (
            <div
              style={{
                padding: "0px 12px",
                //borderRadius: "2px",
                //marginBottom: "2px",
                //background: "#00473C",   // background of each option
                //color: "white",
                //width: "120px",
                display: "flex",
                alignItems: "center",
                //justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              <span>{option.label}</span>
            </div>
          )}
        />
      </div>

      {/* Color */}
      <div className="p-field">
        <MultiSelect
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.value)}
          options={color}
          optionLabel="label"
          showClear={true}
          placeholder="Color"
          selectedItemsLabel="Color {0}"
          maxSelectedLabels={0}
          className="w-full px-3 text-base text-white"
          panelClassName="custom-multiselect-panel"
          panelStyle={{ marginTop: "10px" }}
          style={{
            borderRadius: "999px",
            padding: "0.36rem",
            backgroundColor: selectedColor.length > 0 ? "#057642" : "#00473C",
            borderColor: "#ccc",
            border: "1px solid white",
            color: "white",
            minWidth: "150px",
          }}
          itemTemplate={(option) => (
            <div
              style={{
                padding: "0px 12px",
                //borderRadius: "2px",
                //marginBottom: "2px",
                //background: "#00473C",   // background of each option
                //color: "white",
                //width: "120px",
                display: "flex",
                alignItems: "center",
                //justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              {/* Color circle */}
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: option.colorCode
                    ? String(option.colorCode)
                    : "#CCCCCC",
                  border: "1px solid white",
                }}
              />

              <span>{option.label}</span>
            </div>
          )}
        />
      </div>

      <div className="p-field">
        <MultiSelect
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={city}
          optionLabel="label"
          showClear={true}
          placeholder="City"
          selectedItemsLabel="City ({0})"
          maxSelectedLabels={0}
          className="w-full px-3 text-base text-white"
          panelClassName="custom-multiselect-panel"
          panelStyle={{ marginTop: "10px" }}
          style={{
            borderRadius: "999px",
            padding: "0.36rem",
            backgroundColor: selectedCity.length > 0 ? "#057642" : "#00473C",
            borderColor: "#ccc",
            border: "1px solid white",
            color: "white",
            minWidth: "150px",
          }}
          itemTemplate={(option) => (
            <div
              style={{
                padding: "0px 12px",
                //borderRadius: "2px",
                //marginBottom: "2px",
                //background: "#00473C",   // background of each option
                //color: "white",
                //width: "120px",
                display: "flex",
                alignItems: "center",
                //justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              {/* Color circle */}
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: option.colorCode
                    ? String(option.colorCode)
                    : "#CCCCCC",
                  border: "1px solid white",
                }}
              />

              <span>{option.label}</span>
            </div>
          )}
        />
      </div>

      {/* Brand */}
      <Button
        label="Brand"
        icon="pi pi-angle-down"
        iconPos="right"
        className="px-3 py-2 text-base text-white flex-shrink-0"
        outlined
        style={{
          borderRadius: "999px",
          background: "#00473C",
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
}
