import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavDesktop from "./sections/NavDesktop";

const Home = lazy(() => import("@routes/Home"));
const Shop = lazy(() => import("@routes/Shop"));
const Product = lazy(() => import("@routes/Product"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavDesktop />}>
          <Route index element={<Home />} />
          <Route
            path="/shop/:gender?/category?/:category?/badge?/:badge?/brand?/:brand?"
            element={<Shop />}
          />
          <Route path="/product/:productId" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
