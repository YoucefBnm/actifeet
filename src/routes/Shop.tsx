// import { useAddProudcts } from "@/hooks/useAddProducts";
import {
  useWindowHeight,
  useWindowWidth,
} from "@react-hook/window-size/throttled";

import ShopList from "@/sections/ShopList";
import ShopNav from "@/sections/ShopNav";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FilterIcon } from "@/assets";

const Shop = () => {
  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();

  // useAddProudcts();
  return (
    <main className="relative py-12">
      <section className="px-default section-container">
        {windowWidth > 900 ? (
          <aside
            style={{ height: windowHeight - 60 }}
            className="sticky top-16 left-0 w-full  col-span-3"
          >
            <ShopNav />
          </aside>
        ) : (
          <div className="sticky top-20 z-10 right-0 w-full flex justify-end  col-start-12 col-span-1">
            <Drawer direction="right">
              <DrawerTrigger
                title="shop filters"
                aria-label="shop filters trigger"
                className=" size-8 bg-neutral-50 border border-neutral-100 flex-center  rounded-full"
              >
                <img width={16} height={16} src={FilterIcon} aria-hidden />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="justify-end">
                  <DrawerClose>
                    <span className="text-2xl text-neutral-500">&times;</span>
                  </DrawerClose>
                </DrawerHeader>
                <ShopNav />
              </DrawerContent>
            </Drawer>
          </div>
        )}
        <div
          className={`${
            windowWidth > 900
              ? "col-span-8 col-start-5"
              : "col-span-11 col-start-1"
          } relative`}
        >
          <ShopList />
        </div>
      </section>
    </main>
  );
};

export default Shop;
