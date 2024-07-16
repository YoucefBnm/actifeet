import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { easeTransition } from "@/libs/motion/motion.transitions";
import { clipPathVariants, fadeVariants } from "@/libs/motion/motion.variants";
import { cn } from "@/libs/shadcn/shadcn";
import { motion } from "framer-motion";
import { createContext, PropsWithChildren, useContext } from "react";
import AnimatedText from "./AnimatedText";

type HeroContentContextValue = {
  heroBg: string;
  title?: string;
  heading: string;
  description?: string;
};
const HeroContext = createContext<HeroContentContextValue | undefined>(
  undefined
);
function useHeroContext() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error(
      "useHeroContext must be used within a HeroContentContextProvider"
    );
  }
  return context;
}

type HeroWrapProps = PropsWithChildren & {
  heroBg: string;
  title?: string;
  heading: string;
  description?: string;
  className?: string;
};

const HeroWrap = ({
  children,
  heroBg,
  title,
  heading,
  description,
  className,
}: HeroWrapProps) => {
  const { targetRef, isInView } = useRevealAnimation();

  return (
    <HeroContext.Provider value={{ heroBg, title, heading, description }}>
      <motion.section
        transition={{ staggerChildren: 0.3 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={targetRef}
        className={cn(
          "min-h-screen w-full relative px-default place-content-center",
          className
        )}
      >
        {children}
      </motion.section>
    </HeroContext.Provider>
  );
};

const HeroWrapBg = () => {
  const { heroBg } = useHeroContext();
  return (
    <motion.div
      className="absolute inset-0 size-full -z-10"
      variants={clipPathVariants}
      transition={{ ease: easeTransition, duration: 1.5 }}
    >
      <img
        loading="lazy"
        width={2000}
        height={1300}
        decoding="async"
        src={heroBg}
        alt="actifeet athletic shoes"
        className="size-full"
      />
    </motion.div>
  );
};

const HeroWrapTitle = () => {
  const { title } = useHeroContext();
  return (
    <motion.h4 className="heading-title" variants={fadeVariants("bottom")}>
      {title}
    </motion.h4>
  );
};

const HeroWrapHeading = () => {
  const { heading } = useHeroContext();
  return (
    <AnimatedText
      className="heading-xl text-white overflow-hidden max-w-[11ch]"
      text={heading}
    />
  );
};

const HeroWrapDescription = () => {
  const { description } = useHeroContext();
  return (
    <motion.p
      className="text-sm mt-6 max-w-[60vw] md:max-w-[33vw] leading-normal text-gray-100"
      variants={fadeVariants("opacity")}
      transition={{ ease: "linear" }}
    >
      {description}
    </motion.p>
  );
};

type HeroWrapCtaProps = PropsWithChildren & {
  className?: string;
};
const HeroWrapCta = ({ children, className }: HeroWrapCtaProps) => {
  return (
    <motion.div
      className={cn("mt-4 overflow-hidden", className)}
      variants={fadeVariants("opacity")}
      transition={{ ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

export {
  HeroWrap,
  HeroWrapBg,
  HeroWrapTitle,
  HeroWrapHeading,
  HeroWrapDescription,
  HeroWrapCta,
};
