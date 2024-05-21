import { SHOP_DATA } from "@/assets/shop_data";
import CategoryWrap from "@/components/CategoryWrap";
import HeroWrap from "@/components/HeroWrap";
import ProductCard from "@/components/ProductCard";
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
      <HeroWrap heroBg={bgImage} heading={heading} route="/shop/all" />
      <ProductCard product={SHOP_DATA[2]} />
      <Sports />
      <Gender />
      <CategoryWrap
        title={hikingCategoryContent.title}
        heading={hikingCategoryContent.heading}
        description={hikingCategoryContent.description}
        route="/shop/sport/hiking"
        imageUrl={hikingCategoryContent.image}
      />
      <HeroWrap
        title={heroRunningContent.title}
        heroBg={heroRunningContent.bgImage}
        heading={heroRunningContent.heading}
        description={heroRunningContent.description}
        route="/shop/sport/running"
      />
      <CategoryWrap
        title={crossTrainingCategoryContent.title}
        heading={crossTrainingCategoryContent.heading}
        description={crossTrainingCategoryContent.description}
        route="/shop/sport/hiking"
        imageUrl={crossTrainingCategoryContent.image}
      />
      <HeroWrap
        title={heroClimbingContent.title}
        heroBg={heroClimbingContent.bgImage}
        heading={heroClimbingContent.heading}
        description={heroClimbingContent.description}
        route="/shop/sport/running"
      />
    </>
  );
};

export default Home;
