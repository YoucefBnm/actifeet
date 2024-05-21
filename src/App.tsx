import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@routes/Home"));
const Shop = lazy(() => import("@routes/Shop"));
const Product = lazy(() => import("@routes/Product"));

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/shop/:gender?/category?/:category?/badge?/:badge?/brand?/:brand?"
          element={<Shop />}
        />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
