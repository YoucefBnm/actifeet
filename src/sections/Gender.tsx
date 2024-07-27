import { CategoryMenImage, CategoryWomenImage } from "@/assets";
import AnimatedText from "@/components/AnimatedText";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { easeTransition } from "@/libs/motion/motion.transitions";
import { clipPathVariants, fadeVariants } from "@/libs/motion/motion.variants";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

interface GenderCardProps {
  inView: boolean;
  imageUrl: string;
  title: string;
  route: string;
}

const GenderCard = ({ inView, imageUrl, title, route }: GenderCardProps) => {
  const controls = useAnimation();
  const startAnimation = () => controls.start("visible");

  return (
    <motion.div
      transition={{ staggerChildren: 0.2 }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        transition={{ ease: easeTransition, duration: 2 }}
        variants={clipPathVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        onAnimationComplete={startAnimation}
      >
        <Link to={route} className="block">
          <motion.picture
            whileHover={{ scale: 1.2 }}
            transition={{ ease: easeTransition, duration: 0.5 }}
            className="size-full block"
          >
            <img
              loading="lazy"
              decoding="async"
              width={800}
              height={1000}
              className=" align-middle size-full"
              src={imageUrl}
              alt={title}
            />
          </motion.picture>
        </Link>
      </motion.div>

      <div className="overflow-hidden">
        <motion.h3
          className="heading-base mt-4 uppercase "
          variants={fadeVariants("bottom")}
          transition={{ ease: easeTransition, duration: 0.4 }}
          initial="hidden"
          animate={controls}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const Gender = () => {
  const { targetRef, isInView } = useRevealAnimation();
  return (
    <section className="px-default py-16">
      <motion.div
        ref={targetRef}
        className="section-container grid-rows-[min-content_1fr_min-content]"
        transition={{ staggerChildren: 0.25 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatedText
          className="heading-title col-span-3 col-start-1 row-start-1  mb-8 h-min"
          text="shop by"
        />

        <div className="col-span-5 md:col-span-4 col-start-1 md:col-start-2 row-start-2 row-span-2">
          <GenderCard
            inView={isInView}
            imageUrl={CategoryMenImage}
            title="men"
            route="/shop/men"
          />
        </div>

        <div className="col-span-5 md:col-span-4 col-start-7 md:col-start-7 row-span-2 row-start-1 ">
          <GenderCard
            inView={isInView}
            imageUrl={CategoryWomenImage}
            title="women"
            route="/shop/women"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Gender;
