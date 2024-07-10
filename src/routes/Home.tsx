import CategoryWrap from "@/components/CategoryWrap";
import HeroWrap from "@/components/HeroWrap";
import ProductsCarousel from "@/components/ProductsCarousel";
import {
  crossTrainingCategoryContent,
  heroClimbingContent,
  heroContent,
  heroRunningContent,
  hikingCategoryContent,
} from "@/constants";
import Gender from "@/sections/Gender";
import Sports from "@/sections/Sports";

const Home = () => {
  const { heading, bgImage } = heroContent;

  return (
    <>
      <HeroWrap
        heroBg={bgImage}
        heading={heading}
        route="/shop/category/running"
      />
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
        route="/shop/category/running"
      />
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
        route="/shop/category/running"
      />
      <ProductsCarousel
        title="best deals"
        route="/shop/badge/sale"
        params={{ badge: "sale" }}
      />
    </>
  );
};

export default Home;
