import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Header from "../components/Header";
import LinkBar from "../components/LinkBar";

export function Home() {
  const {
    darkMode,
    setDarkMode,
    markerGeo,
    setMarkerGeo,
    portugalGeo,
    setPortugalGeo,
    filterOpen,
    setFilterOpen,
    flagOpen,
    setFlagOpen,
    flag,
    setFlag,
    hoveredId,
    setHoveredId,
    region,
    setRegion,
    selectedRegion,
    setSelectedRegion,
    zoomView,
    setZoomView,
    initialView,
    setInitialView,
  } = useContext(GlobalContext);

  return (
    <>
      <Header />
    </>
  );
}
