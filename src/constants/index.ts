import { v4 as uuidv4 } from "uuid";
import {
  CategoryRunningImage,
  CategoryClimbingImage,
  CategoryCrossImage,
  CategoryHikingImage,
  HeroMainImage,
  HeroRunningImage,
  HeroClimbingImage,
} from "@/assets";

export const sports = {
  title: "sports",
  description:
    "your ultimate destination for high-performance athletic shoes designed to support every stride, climb, and jump. Whether you're hitting the trails, the gym, or the mountains, Actifeet has the perfect footwear to match your active lifestyle.",
  items: [
    {
      id: uuidv4(),
      title: "running",
      image: CategoryRunningImage,
      route: "/shop/running",
    },
    {
      id: uuidv4(),
      title: "cross training",
      image: CategoryCrossImage,
      route: "/shop/cross training",
    },
    {
      id: uuidv4(),
      title: "hiking",
      image: CategoryHikingImage,
      route: "/shop/hiking",
    },
    {
      id: uuidv4(),
      title: "climbing",
      image: CategoryClimbingImage,
      route: "/shop/climbing",
    },
  ],
};

export const heroContent = {
  bgImage: HeroMainImage,
  heading: "elevate your step",
};

export const heroRunningContent = {
  title: "running",
  heading: "feel the thrill of the run",
  description:
    "Designed to enhance your running experience, whether you're a seasoned marathoner or a beginner hitting the pavement for the first time. From responsive cushioning to lightweight designs, our shoes are engineered to provide optimal support",
  bgImage: HeroRunningImage,
};

export const heroClimbingContent = {
  title: "climbing",
  heading: "reach new heights",
  description:
    "Experience the thrill of vertical conquest with our range of climbing shoes. Designed with precision, grip, and durability in mind, these shoes are your ultimate companion on the rock face. From bouldering to sport climbing and trad climbing, our climbing shoes offer exceptional performance, allowing you to push your limits and achieve new personal bests.",
  bgImage: HeroClimbingImage,
};

export const hikingCategoryContent = {
  title: "hiking",
  heading: "Explore the Outdoors",
  description:
    "Embark on unforgettable outdoor adventures with our range of hiking shoes. Built for durability, traction, and comfort, our hiking shoes will accompany you through rugged terrains and varying conditions. From short day hikes to multi-day treks, our hiking shoes will provide the support and protection you need to conquer the trails and immerse yourself in nature.",
  image: CategoryHikingImage,
};

export const crossTrainingCategoryContent = {
  title: "running",
  heading: "master every movement",
  description:
    "Our cross-training shoe collection is engineered to handle any workout, from intense gym sessions to high-intensity interval training. With superior stability, flexibility, and breathability, these shoes are designed to support your every move. Whether you're lifting weights, sprinting, or engaging in agility drills, our cross-training shoes will keep you grounded and ready for any challenge.",
  image: CategoryCrossImage,
};
