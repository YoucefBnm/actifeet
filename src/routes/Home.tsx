import CategoryWrap from "@/components/CategoryWrap";
import {
  HeroWrap,
  HeroWrapBg,
  HeroWrapCta,
  HeroWrapDescription,
  HeroWrapHeading,
} from "@/components/HeroWrap";
import ProductsCarousel from "@/components/ProductsCarousel";
import { Button } from "@/components/ui/button";
import {
  crossTrainingCategoryContent,
  heroClimbingContent,
  heroContent,
  heroRunningContent,
  hikingCategoryContent,
} from "@/constants";
import Gender from "@/sections/Gender";
import Sports from "@/sections/Sports";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { heading, bgImage } = heroContent;

  const navigate = useNavigate();
  const navigateToMenShop = () => navigate("/shop/men");
  const navigateToWomenShop = () => navigate("/shop/women");
  const navigateToRunningShop = () => navigate("/shop/category/running");
  const navigattoclimbingShop = () => navigate("/shop/category/climbing");

  return (
    <>
      {/* <HeroWrap
        heroBg={bgImage}
        heading={heading}
        route="/shop/category/running"
      /> */}
      <HeroWrap heroBg={bgImage} heading={heading}>
        <HeroWrapBg />
        <HeroWrapHeading />
        <HeroWrapCta className="flex gap-6">
          <Button variant={"secondary"} size={"lg"} onAbort={navigateToMenShop}>
            Shop Men
          </Button>
          <Button
            variant={"secondary"}
            size={"lg"}
            onClick={navigateToWomenShop}
          >
            Shop Women
          </Button>
        </HeroWrapCta>
      </HeroWrap>
      <Sports />
      <Gender />
      <ProductsCarousel
        title="favorites"
        route="/shop/badge/best seller"
        params={{ badge: "best seller" }}
      />
      <CategoryWrap
        title={hikingCategoryContent.title}
        heading={hikingCategoryContent.heading}
        description={hikingCategoryContent.description}
        route="/shop/category/hiking"
        imageUrl={hikingCategoryContent.image}
      />
      <HeroWrap
        title={heroRunningContent.title}
        heroBg={heroRunningContent.bgImage}
        heading={heroRunningContent.heading}
        description={heroRunningContent.description}
      >
        <HeroWrapBg />
        <HeroWrapHeading />
        <HeroWrapDescription />
        <HeroWrapCta>
          <Button
            onClick={navigateToRunningShop}
            variant={"secondary"}
            size={"lg"}
          >
            Collection
          </Button>
        </HeroWrapCta>
      </HeroWrap>

      <ProductsCarousel
        title="new arrivals"
        route="/shop/badge/new"
        params={{ badge: "new" }}
      />
      <CategoryWrap
        title={crossTrainingCategoryContent.title}
        heading={crossTrainingCategoryContent.heading}
        description={crossTrainingCategoryContent.description}
        route="/shop/category/hiking"
        imageUrl={crossTrainingCategoryContent.image}
      />

      <HeroWrap
        title={heroClimbingContent.title}
        heroBg={heroClimbingContent.bgImage}
        heading={heroClimbingContent.heading}
        description={heroClimbingContent.description}
      >
        <HeroWrapBg />
        <HeroWrapHeading />
        <HeroWrapDescription />
        <HeroWrapCta>
          <Button
            onClick={navigattoclimbingShop}
            variant={"secondary"}
            size={"lg"}
          >
            Collection
          </Button>
        </HeroWrapCta>
      </HeroWrap>
      <ProductsCarousel
        title="best deals"
        route="/shop/badge/sale"
        params={{ badge: "sale" }}
      />
    </>
  );
};

export default Home;
