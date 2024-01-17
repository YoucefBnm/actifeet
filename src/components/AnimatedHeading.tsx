import { motion } from "framer-motion"
import { StaggerContainer } from "."
import { fadeVariants } from "@/libs/motion/motion.variants"

interface AnimatedHeadingProps {
    heading: string 
}

const AnimatedHeading = ({ heading }:AnimatedHeadingProps) => {
    const splitHeading = heading.split(' ')

  return (
    <StaggerContainer style="overflow-hidden mt-auto">
        {
            splitHeading.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    className="inline-block last-of-type:mr-0 mr-5 heading heading-xl text-zinc-200"
                    variants={fadeVariants('bottom')}
                >
                    {word}
                </motion.span>
            ))
        }
    </StaggerContainer>
  )
}

export default AnimatedHeading