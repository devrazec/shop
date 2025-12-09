import React, { useState, useContext, useMemo, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import { Button } from 'primereact/button';

import { TextField, Box } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

export default function SearchBarP() {
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
    mobileMenu,
    setMobileMenu,
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
  const rows = useMemo(() => {
    if (!data?.rows) return [];

    return data.rows.map((row) => {
      const location = city[Math.floor(Math.random() * city.length)].label;

      const { lat, lng } = getRandomLatLng(location);

      const randomProduct = product[Math.floor(Math.random() * product.length)];

      return {
        id: row.id || randomId(), // stable after memo
        product: randomProduct.name,
        seller: row.traderName,
        stock: row.quantity,
        price: `€ ${Number(row.unitPrice).toFixed(2)}`,
        tax: `${Number(row.feeRate).toFixed(2)} %`,
        location,
        lat,
        lng,
        status: row.status,
        gender: randomProduct.gender,
        category: randomProduct.type,
        color: randomProduct.color,
        image: `/shop/img/product/${randomProduct.image}`,
      };
    });
  }, [data, city, product]);

  const productList = useMemo(() => {
    // dedupe and remove falsy names
    const names = rows.map((r) => r.product).filter(Boolean);
    return Array.from(new Set(names));
  }, [rows]);

  /*   const sellerList = useMemo(() => {
      const cleaned = rows
        .map((r) => r.seller?.trim())
        .filter(Boolean);
  
      const unique = Array.from(
        new Map(cleaned.map(name => [name.toLowerCase(), name]))
          .values()
      );
  
      return unique;
    }, [rows]); */

  const [layout, setLayout] = useState("grid");

  const getSeverity = (status) => {
    switch (status) {
      case "Filled":
        return "success";
      case "Open":
        return "warning";
      case "Rejected":
        return "danger";
      case "Boys":
        return "info";
      default:
        return null;
    }
  };

  // ---------------- List Item ----------------
  const listItem = (item, index) => {
    const isSelected = selectedProduct?.id === item.id;

    const itemStyle = {
      transition: "all 0.3s ease-in-out",
      borderTop: index !== 0 ? "1px solid #e0e0e0" : "none",
      border: isSelected ? "2px solid #22c55e" : undefined,
      backgroundColor: isSelected ? "#ecfdf5" : "#ffffff",
      boxShadow: isSelected
        ? "0 0 15px 3px rgba(34,197,94,0.3)"
        : "0 1px 3px rgba(0,0,0,0.1)",
      maxHeight: 155,
      overflow: "hidden",
    };

    const hoverStyle = {
      boxShadow: "0 0 15px 3px rgba(34,197,94,0.2)",
      border: "2px solid #4ade80",
      backgroundColor: "#f0fdf4",
      transform: "scale(1.02)",
    };

    return (
      <div className="col-12" key={item.id}>
        <div
          className="flex flex-col sm:flex-row items-center p-4 gap-4 cursor-pointer"
          style={itemStyle}
          onClick={() => setSelectedProduct(item)}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, itemStyle)}>
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain shadow-2 border-round"
              src={item.image}
              alt={item.product}
              width={100}
            //maxHeight={100}
            />
          </div>
          {/* Content */}
          <div className="flex flex-1 flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-2 sm:mt-0">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold text-900">{item.product}</div>
              <Rating value={item.rating ?? 0} readOnly cancel={false} />
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{item.category}</span>
                </span>
                <Tag value={item.status} severity={getSeverity(item.status)} />
              </div>
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 mt-2 sm:mt-0">
              <span className="text-xl font-semibold">{item.price}</span>
              <button
                className="p-button-rounded p-button p-component"
                disabled={item.status === "OUTOFSTOCK"}>
                <i className="pi pi-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ---------------- Grid Item ----------------

  const gridItem = (item) => {
    const isSelected = selectedProduct?.id === item.id;

    const cardStyle = {
      transition: "all 0.3s ease-in-out",
      border: isSelected ? "2px solid #22c55e" : "1px solid #e0e0e0", // green border if selected
      backgroundColor: isSelected ? "#ecfdf5" : "#ffffff", // light green bg if selected
      boxShadow: isSelected
        ? "0 0 15px 3px rgba(34,197,94,0.3)"
        : "0 1px 3px rgba(0,0,0,0.1)",
    };

    const hoverStyle = {
      boxShadow: "0 0 15px 3px rgba(34,197,94,0.2)",
      border: "2px solid #4ade80",
      backgroundColor: "#f0fdf4",
      transform: "scale(1.05)",
    };

    return (
      <div
        key={item.id}
        className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2 p-3"
        style={{ maxWidth: 260 }}>
        <div
          className="surface-card border-round-xl p-4 w-full cursor-pointer p-ripple"
          style={cardStyle}
          onClick={() => setSelectedProduct(item)}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}>
          {/* Top Row */}
          <div className="flex justify-content-between align-items-center mb-3">
            <div className="flex align-items-center gap-2 text-600">
              <i className="pi pi-tag text-sm" />
              <span className="font-medium text-sm">{item.category}</span>
            </div>
            <Tag
              value={item.gender}
              severity={getSeverity(item.gender)}
              className="px-3 py-1"
            />
          </div>

          {/* Image */}
          <div className="flex flex-column align-items-center my-4">
            <img
              src={item.image}
              alt={item.product}
              className="w-full border-round-lg shadow-2"
              style={{ maxHeight: 120, objectFit: "contain" }}
            />
          </div>

          {/* Product name */}
          <div className="text-center mb-2">
            <span className="text-lg font-bold text-800">{item.product}</span>
          </div>

          {/* Rating */}
          {/* <div className="flex justify-content-center mb-3">
            <Rating value={item.rating ?? 0} readOnly cancel={false} />
          </div> */}

          {/* Price row */}
          <div className="flex justify-content-between align-items-center mt-3">
            <span className="text-xl font-semibold">{item.price}</span>

            <Button
              icon="pi pi-shopping-cart"
              className="p-button-success p-button-rounded"
              style={{
                padding: '0.75rem 1rem', // bigger button
                fontSize: '1rem',        // readable text/icon size
                minWidth: '3rem',        // ensures icon button isn’t tiny
              }}
              aria-label="Add to Cart"
            />
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (item, layout, index) => {
    if (!item) return null;
    return layout === "list" ? listItem(item, index) : gridItem(item);
  };

  // ---------------- Header ----------------
  const header = () => (
    <div className="flex justify-content-end p-2">
      <DataViewLayoutOptions
        layout={layout}
        onChange={(e) => setLayout(e.value)}
      />
    </div>
  );

  return (
    <div className="card">
      <DataView
        value={rows}
        layout={layout}
        itemTemplate={itemTemplate}
        //header={header()}
        paginator
        rows={12}
        rowsPerPageOptions={[6, 12, 24]}
      />
    </div>
  );
}
