import { Route, Routes } from "react-router-dom"
import { Footer, NavDesktop } from "./layouts"
import { Home, Shop } from "./routes"

function App() {

  return (
    <>
      <NavDesktop />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop/:gender?/category?/:category?/badges?/:badges?/brand?/:brand?" element={<Shop />} />
        </Routes>

      <Footer />
    </>
  )
}

export default App
