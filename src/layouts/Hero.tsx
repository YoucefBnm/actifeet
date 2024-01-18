import { AnimatedHeading, StaggerContainer } from "@/components"
import { fadeVariants } from "@/libs/motion/motion.variants"
import { Button } from "@/libs/shadcn/ui/button"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface HeroProps {
  bg: string;
  heading: string;
  paragraph: string;
  btnLink: string;
  btnVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

const Hero = ({ bg, heading, paragraph, btnLink, btnVariant}:HeroProps) => {

  const MotionButton = motion(Button)

  return (
    <section className={`w-full min-h-svh bg-cover bg-no-repeat px-default flex items-end ${bg} bg-right`}>
      <StaggerContainer direction={-1} style="h-[450px] flex flex-col items-start justify-between mb-12">
        <StaggerContainer style="flex flex-col justify-start items-start">
          <motion.p
            variants={fadeVariants('right')}
            className="text-white max-w-[55ch] mb-6"
          >
            {paragraph}
          </motion.p>

          <MotionButton variant={btnVariant} variants={fadeVariants('right')}>
            <Link to={btnLink}>Shop Collection</Link>
          </MotionButton>
        </StaggerContainer>

        <StaggerContainer style="overflow-hidden mt-auto">
          <AnimatedHeading heading={heading} />
        </StaggerContainer>
      </StaggerContainer>
    </section>
  )
}

export default Hero