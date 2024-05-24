import { motion, useAnimation } from "framer-motion";
import { clipPathVariants, fadeVariants } from "@/libs/motion/motion.variants";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { easeTransition } from "@/libs/motion/motion.transitions";
import AnimatedText from "./AnimatedText";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Button } from "./ui/button";

interface HeroWrapProps {
  heroBg: string;
  title?: string;
  heading: string;
  description?: string;
  route: string;
}

const HeroWrap = memo(function HeroWrap({
  heroBg,
  title,
  heading,
  description,
  route,
}: HeroWrapProps) {
  const { targetRef, isInView } = useRevealAnimation();
  const controls = useAnimation();
  const startAnimation = () => controls.start("visible");

  const navigate = useNavigate();

  const navigateToShopPage = () => navigate(route);

  return (
    <section
      ref={targetRef}
      className="min-h-svh w-screen relative px-default flex items-center justify-start"
    >
      <motion.div
        className="absolute inset-0 size-full"
        variants={clipPathVariants}
        transition={{ ease: easeTransition, duration: 1.5 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onAnimationComplete={startAnimation}
      >
        <picture className="size-full object-cover">
          <img
            loading="lazy"
            width={2000}
            height={1300}
            decoding="async"
            src={heroBg}
            alt="actifeet athletic shoes"
            className="size-full"
          />
        </picture>
      </motion.div>

      <motion.div
        transition={{ staggerChildren: 0.1 }}
        initial="hidden"
        animate={controls}
        className="text-white overflow-hidden relative z-10"
      >
        {title && (
          <div className="overflow-hidden mb-1">
            <AnimatedText className="heading-title" text={title} />
          </div>
        )}
        <AnimatedText
          className="heading-xl overflow-hidden max-w-[11ch]"
          text={heading}
        />
        {description && (
          <motion.p
            className="text-sm mt-6 max-w-[60vw] md:max-w-[33vw] leading-normal text-gray-100"
            variants={fadeVariants("opacity")}
            transition={{ ease: "linear" }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          className=" mt-4 overflow-hidden"
          variants={fadeVariants("bottom")}
          transition={{ ease: "linear" }}
        >
          <Button
            variant={"secondary"}
            size={"lg"}
            className="btn"
            onClick={navigateToShopPage}
          >
            Shop
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default HeroWrap;
