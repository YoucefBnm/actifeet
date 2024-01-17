import { StaggerContainer } from "@/components";
import { featuresContent } from "@/constants/data";
import { fadeVariants } from "@/libs/motion/motion.variants";
import { motion } from "framer-motion";
interface FeatureCardProps {
  featureImage: string;
  featureDescription: string
}

const FeatureCard = ({ featureImage, featureDescription }: FeatureCardProps) => {
  return (
    <motion.div variants={fadeVariants('bottom')} className="flex flex-col justify-center items-center gap-y-6">
      <img className="align-middle" src={featureImage} alt={featureDescription} />
      <p className=" font-heading font-semibold text-lg">{featureDescription}</p>
    </motion.div>
  )
}

const Features = () => {
  return (
    <section className="px-default py-8">
      <StaggerContainer style="flex gap-y-9 gap-x-4 flex-wrap justify-evenly items-start">
        {
          featuresContent.map(featureItem => (
            <FeatureCard 
              key={featureItem.id}
              featureImage={featureItem.icon}
              featureDescription={featureItem.description}
            />
          ))
        }
      </StaggerContainer>

    </section>
  )
}

export default Features