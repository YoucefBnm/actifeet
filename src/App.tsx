import { Route, Routes } from "react-router-dom"
import { Footer, NavDesktop, NavMobile } from "./layouts"
import { Checkout, Home, Login, ProdcutPage, Signup, Shop } from "./routes"
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
        
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Signup />} />
          
        
      </Routes>

      <Footer />
    </>
  )
}

export default App
