import React, { useContext } from "react";

import { Button } from "primereact/button";
import { ToggleButton } from 'primereact/togglebutton';
import { SelectButton } from 'primereact/selectbutton';

import {
  Box,
  MenuItem,
  Select,
  Typography,
  Menu,
} from "@mui/material";

import { GlobalContext } from "../context/GlobalContext";

export default function LinkBarP() {
  const {
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
        overflowX: { xs: "auto", sm: "auto" },
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          // Chrome/Safari
          height: 6,
        },
      }}
    >

      <SelectButton
        value={filterAll ? 'All' : null}
        onChange={(e) => setFilterAll(e.value === 'All')}
        options={['All']}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterAll && option === 'All';
          return (
            <span
              style={{
                display: 'inline-block',
                minWidth: '80px',
                textAlign: 'center',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                backgroundColor: isActive ? '#057642' : '#00473C',
                color: 'white',
                cursor: 'pointer',
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      <SelectButton
        value={filterGirls ? 'Girls' : null}
        onChange={(e) => setFilterGirls(e.value === 'Girls')}
        options={['Girls']}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterGirls && option === 'Girls';
          return (
            <span
              style={{
                display: 'inline-block',
                minWidth: '80px',
                textAlign: 'center',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                backgroundColor: isActive ? '#057642' : '#00473C',
                color: 'white',
                cursor: 'pointer',
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      <SelectButton
        value={filterBoys ? 'Boys' : null}
        onChange={(e) => setFilterBoys(e.value === 'Boys')}
        options={['Boys']}
        style={{
          borderRadius: "999px",
          borderColor: "#ccc",
        }}
        itemTemplate={(option) => {
          const isActive = filterBoys && option === 'Boys';
          return (
            <span
              style={{
                display: 'inline-block',
                minWidth: '80px',
                textAlign: 'center',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                backgroundColor: isActive ? '#057642' : '#00473C',
                color: 'white',
                cursor: 'pointer',
                border: "1px solid white",
              }}
            >
              {option}
            </span>
          );
        }}
      />

      {/* Category */}
      <Button
        label="Category"
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

      {/* Location */}
      <Button
        label="Location"
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
