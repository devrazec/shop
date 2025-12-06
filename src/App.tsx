import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Materialui } from "./pages/Materialui";
import { Primereact } from "./pages/Primereact";
import { NotFound } from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/materialui" element={<Materialui />} />
        <Route path="/primereact" element={<Primereact />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
