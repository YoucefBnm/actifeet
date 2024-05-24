// import { useAddProudcts } from "@/hooks/useAddProducts";
import { useWindowHeight } from "@react-hook/window-size/throttled";

import ShopList from "@/sections/ShopList";
import ShopNav from "@/sections/ShopNav";

const Shop = () => {
  const windowHeight = useWindowHeight();

  // useAddProudcts();
  return (
    <main className="relative py-12">
      <section className="px-default section-container">
        <aside
          style={{ height: windowHeight - 60 }}
          className="sticky top-16 left-0 w-full  col-span-3"
        >
          <ShopNav />
        </aside>
        <div className=" relative col-span-8 col-start-5">
          <ShopList />
        </div>
      </section>
    </main>
  );
};

export default Shop;
