import React, { createContext, useState } from "react";
import portugalJson from "../data/portugal.json";
import productJson from "../data/product.json";

import L from "leaflet";

export const GlobalContext = createContext();

const GlobalProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [portugalGeo, setPortugalGeo] = useState(portugalJson);
  const [selectedFlag, setSelectedFlag] = useState("EN");
  const [flag, setFlag] = useState([
    { name: 'English', code: 'EN', icon: 'fi fi-gb' },
    { name: 'Portuguese', code: 'PT', icon: 'fi fi-pt' },
    { name: 'Spanish', code: 'ES', icon: 'fi fi-es' }
  ]);

  const [hoveredId, setHoveredId] = useState(null);

  const [location, setLocation] = useState({
    All: L.latLngBounds([
      [36.9, -9.5], // southwestern Portugal
      [42.1, -6.2], // northeastern Portugal
    ]),
    Lisbon: L.latLngBounds([
      [38.69, -9.25],
      [38.82, -9.05],
    ]),
    Porto: L.latLngBounds([
      [41.11, -8.74],
      [41.19, -8.53],
    ]),
    Faro: L.latLngBounds([
      [37.0, -8.1],
      [37.2, -7.8],
    ]),
    Coimbra: L.latLngBounds([
      [40.18, -8.48],
      [40.23, -8.4],
    ]),
    Braga: L.latLngBounds([
      [41.53, -8.47],
      [41.57, -8.42],
    ]),
    Bragança: L.latLngBounds([
      [41.79, -6.75],
      [41.83, -6.7],
    ]),
    Leiria: L.latLngBounds([
      [39.74, -8.87],
      [39.76, -8.8],
    ]),
    Guarda: L.latLngBounds([
      [40.53, -7.48],
      [40.56, -7.42],
    ]),
  });

  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomView, setZoomView] = useState(7);
  const [initialView, setInitialView] = useState([39.3999, -8.2245]);
  const [city, setCity] = useState([
    "Lisbon",
    "Porto",
    "Faro",
    "Coimbra",
    "Braga",
    "Bragança",
    "Leiria",
    "Guarda",
  ]);

  const [cityBounds, setCityBounds] = useState({
    Lisbon: { latMin: 38.69, latMax: 38.82, lngMin: -9.25, lngMax: -9.05 },
    Porto: { latMin: 41.11, latMax: 41.19, lngMin: -8.74, lngMax: -8.53 },
    Faro: { latMin: 37.0, latMax: 37.2, lngMin: -8.1, lngMax: -7.8 },
    Coimbra: { latMin: 40.18, latMax: 40.23, lngMin: -8.48, lngMax: -8.4 },
    Braga: { latMin: 41.53, latMax: 41.57, lngMin: -8.47, lngMax: -8.42 },
    Bragança: { latMin: 41.79, latMax: 41.83, lngMin: -6.75, lngMax: -6.7 },
    Leiria: { latMin: 39.74, latMax: 39.76, lngMin: -8.87, lngMax: -8.8 },
    Guarda: { latMin: 40.53, latMax: 40.56, lngMin: -7.48, lngMax: -7.42 },
  });

  const [product, setProduct] = useState(productJson);

  const [color, setColor] = useState([
    "White",
    "Black",
    "Blue",
    "Pink",
    "Red",
    "Olive",
    "Yellow",
    "Navy Blue",
    "Magenta",
    "Grey",
    "Green",
    "Orange",
    "Purple",
    "Turquoise Blue",
    "Peach",
    "Off White",
    "Teal",
    "Sea Green",
    "Lime Green",
    "Brown",
    "Lavender",
    "Beige",
    "Khaki",
    "Multi",
    "Maroon",
    "Cream",
    "Rust",
    "Grey Melange",
  ]);

  const [category, setCategory] = useState([
    "Tops",
    "Capris",
    "Dresses",
    "Shorts",
    "Tshirts",
    "Skirts",
    "Jeans",
    "Leggings",
    "Innerwear Vests",
    "Rompers",
    "Lehenga Choli",
    "Salwar",
    "Booties",
    "Clothing Set",
    "Trousers",
    "Shirts",
    "Jackets",
    "Kurtas",
    "Sweatshirts",
    "Kurta Sets",
    "Churidar",
    "Waistcoat",
    "Blazers",
  ]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filterAll, setFilterAll] = useState(true);
  const [filterGirls, setFilterGirls] = useState(false);
  const [filterBoys, setFilterBoys] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
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
        smallScreen, setSmallScreen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalProvider);
