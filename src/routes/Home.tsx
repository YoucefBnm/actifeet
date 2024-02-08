import { Categories, Cta, Features, Hero } from "@/layouts"
import { heroContent, climbingContent, hikingContent, crossTrainingContent, runningContent } from "@/constants/data"
import ProductsCarousel from "@/layouts/ProductsCarousel"


const Home = () => {
  
  return (
    <>
      <Hero 
        bg="bg-hero"
        heading={heroContent.heading}
        paragraph={heroContent.paragraph}
        btnLink="/shop/products"
        btnVariant='secondary'
      />
      <Categories />
      
      <Cta
        heading={crossTrainingContent.heading}
        paragraph={crossTrainingContent.paragraph}
        link={crossTrainingContent.link}
        imageUrl={crossTrainingContent.image}
      />

      <ProductsCarousel />
      
      <Hero
        bg="bg-climbing"
        heading={climbingContent.heading}
        paragraph={climbingContent.paragraph}
        btnLink="/shop/category/climbing"
        btnVariant='outline'
      />
      
      <ProductsCarousel />

      <Cta
        heading={runningContent.heading}
        paragraph={runningContent.paragraph}
        link={runningContent.link}
        imageUrl={runningContent.image}
      />
      
      <ProductsCarousel />

      <Hero
        bg="bg-hiking"
        heading={hikingContent.heading}
        paragraph={hikingContent.paragraph}
        btnLink="/shop/hiking"
        btnVariant='outline'
      />

      <Features />
    </>
  )
}

export default Home