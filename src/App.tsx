import { Route, Routes } from "react-router-dom"
import { Footer, NavDesktop, NavMobile } from "./layouts"
import { Home, ProdcutPage, Shop } from "./routes"
import { isMobile } from "./utils/mediaQuery/mediaQuery"

function App() {
  const mediaQuerySize = isMobile()

  return (
    <>
      {
        mediaQuerySize
        ? <NavMobile />
        : <NavDesktop />
      }
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop/:gender?/category?/:category?/badges?/:badges?/brand?/:brand?" element={<Shop />} />
        <Route path="/:productId" element={<ProdcutPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
