# E-commerce

This is a dynamic e-commerce project built with React and Material-UI (MUI).

# 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| React	| Frontend UI framework |
| React-Leaflet | Map engine |
| Leaflet | Geospatial rendering & marker system |
| Material UI | UI components |
| DataGrid | Custom renderCell layouts |
| Data Generation | Generator for demo data |
| Context API | Global state management |
| CSS | Styling & layout |

# ✨ Features

## Randomly generated products with:

- 

## Interactive DataGrid:

- Custom row layout with company logo and detailed info
- Action buttons: Apply, See More, Map
- See More button opens a modal with detailed product info
- Responsive row heights and clean styling
- Top bar with total results and title
- Map Integration
- Each product includes coordinates for its location
- Can link to Google Maps or other map integrations

## Modern UI:

- Material-UI buttons with hover effects
- Professional, clean, and responsive design
- Perfect for demo, testing, or prototyping a e-commerce

# Commands

````

npx create-vite@latest . -- --template react

Select a framework: React
Select a variant: TypeScript
Use rolldown-vite (Experimental)?: No
Install with npm and start now? Yes

-- Router

npm i -S react-router-dom

-- Prettier and Lint

npm i -D prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react

-- Deploy

npm i -D gh-pages

npm run predeploy
npm run deploy

-- Setup

-- File package.json

"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix",
    "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
},

"repository": {
    "type": "git",
    "url": "git+https://github.com/devrazec/shop.git"
},

"homepage": "https://github.com/devrazec/shop",

-- Copy files

.env
.prettierrc
.prettierignore
eslint.config.js

-- File vite.config.js

base: '/shop',

-- tsconfig.app.json

"allowJs": true,
"checkJs": false,
"jsx": "react-jsx",

-- Github

git rm --cached .env

-- UI

npm i -S @mui/material @emotion/react @emotion/styled 

-- Fonts

npm i -S @fontsource/roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

-- Icons

npm i -S flag-icons @mui/icons-material iconsax-react @iconify/react react-icons

-- Components

npm i -S @mui/x-date-pickers dayjs @mui/x-data-grid @mui/x-data-grid-generator

-- Maps

npm i -S leaflet leaflet-draw react-leaflet@next react-leaflet-cluster react-leaflet-draw

-- Run

npm run dev
npm run preview

````

# Web Interface

http://localhost:3000

![Pic1](./src/assets/img/pic1.png)

# Demo

https://devrazec.github.io/shop

# Links

- https://worldvectorlogo.com/random-logos
- https://github.com/levinmejia/Shopify-Product-CSVs-and-Images