import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavDesktop from "./sections/NavDesktop";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import NavMobile from "./sections/NavMobile";
import { useScrollToTop } from "./hooks/useScrollToTop";

const Home = lazy(() => import("@routes/Home"));
const Shop = lazy(() => import("@routes/Shop"));
const Product = lazy(() => import("@routes/Product"));
const Checkout = lazy(() => import("@routes/Checkout"));

const MainNav = () => {
  const windowWidth = useWindowWidth();

  return windowWidth < 850 ? <NavMobile /> : <NavDesktop />;
};

function App() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route
            path="/shop/:gender?/category?/:category?/badge?/:badge?/brand?/:brand?"
            element={<Shop />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
