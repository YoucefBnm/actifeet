import { Route, Routes } from "react-router-dom"
import { Footer, NavDesktop, NavMobile } from "./layouts"
import { Home, Shop } from "./routes"
import { isMobile } from "./utils/mediaQuery/mediaQuery"

function App() {
  

  return (
    <>
      {
        isMobile
        ? <NavMobile />
        : <NavDesktop />
      }
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop/:gender?/category?/:category?/badges?/:badges?/brand?/:brand?" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
