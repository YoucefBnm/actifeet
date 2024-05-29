import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { easeTransition } from "@/libs/motion/motion.transitions";
import { clipPathVariants, fadeVariants } from "@/libs/motion/motion.variants";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { Button } from "./ui/button";

interface CategoryWrapProps {
  title: string;
  imageUrl: string;
  heading: string;
  description: string;
  route: string;
}

const CategoryWrap = memo(function CategoryWrap({
  title,
  imageUrl,
  heading,
  description,
  route,
}: CategoryWrapProps) {
  const { targetRef, isInView } = useRevealAnimation();
  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);

  const controls = useAnimation();
  const startAnimation = () => controls.start("visible");

  return (
    <section className="px-default pb-16 border border-t-neutral-50">
      <motion.div
        ref={targetRef}
        className="section-container grid-rows-[min-content_1fr]"
        transition={{ staggerChildren: 0.25 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatedText
          text={title}
          className=" mb-2 md:mb-0 col-start-1 row-start-1 heading-title"
        />
        <motion.div
          transition={{ ease: easeTransition, duration: 2 }}
          variants={clipPathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onAnimationComplete={startAnimation}
          className="row-start-2 col-start-1 md:col-start-2 md:col-span-4 col-span-6 md:mb-0 mb-4"
        >
          <picture className="size-full">
            <img
              loading="lazy"
              decoding="async"
              width={800}
              height={1000}
              className="size-full align-middle"
              src={imageUrl}
              alt={title}
            />
          </picture>
        </motion.div>

        <motion.div
          className="col-span-10 md:col-span-6 md:col-start-7 row-start-3 col-start-1 md:row-start-2"
          transition={{ staggerChildren: 0.15 }}
          initial="hidden"
          animate={controls}
        >
          <AnimatedText
            text={heading}
            className="md:heading-xl mb-4 heading-md md:max-w-[13ch]"
          />
          <motion.p
            className=" max-w-prose md:max-w-sm text-sm  text-gray-600 leading-normal mb-6"
            variants={fadeVariants("opacity")}
            transition={{ ease: "linear" }}
          >
            {description}
          </motion.p>
          <motion.div
            variants={fadeVariants("opacity")}
            transition={{ ease: "linear" }}
          >
            <Button
              onClick={navigateToPage}
              className="btn-text"
              size={"lg"}
              variant={"default"}
            >
              Collection
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default CategoryWrap;
