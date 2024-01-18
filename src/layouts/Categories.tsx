import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/constants/data";
import { ScrollArea, ScrollBar } from "@/libs/shadcn/ui/scroll-area";
import { StaggerContainer } from "@/components";
import { fadeVariants } from "@/libs/motion/motion.variants";

interface CategoryCardProps {
  imageUrl: string;
  link: string;
  title: string
}

const CategoryCard = (props:CategoryCardProps) => {
  const MotionLink = motion(Link)

  return (
    <MotionLink variants={fadeVariants(null)} to={props.link} className="flex flex-1 items-center justify-center w-[266px] h-[346px] relative overflow-hidden">
      <h4 className="heading relative z-10 text-white heading-sm pointer-events-none">{props.title}</h4>
      <motion.img whileHover={{ scale: 1.05 }} width={266} height={346} className="absolute inset-0 align-middle" src={props.imageUrl} alt={props.title} />
    </MotionLink>
  )
}

const Categories = () => {
  return (
    <section className="px-defaul py-8 h-full flex flex-col items-center justify-center gap-6">
      <StaggerContainer style="overflow-hidden">
        <motion.h2 className="heading heading-md" variants={fadeVariants('bottom')}>
          shop by sport
        </motion.h2>
      </StaggerContainer>
      <ScrollArea className="w-full whitespace-nowrap rounded-none border-none px-default">
        <div className="flex flex-1 gap-6 mb-4">
          {
            categories.map(category => (
              <StaggerContainer key={category.id}>
                <CategoryCard 
                  title={category.title} 
                  imageUrl={category.image} 
                  link={category.link} 
                />
              </StaggerContainer>
            ))
          }
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

export default Categories