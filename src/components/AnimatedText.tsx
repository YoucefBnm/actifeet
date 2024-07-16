import { fadeVariants } from "@/libs/motion/motion.variants";
import { motion } from "framer-motion";
import { memo } from "react";

interface AnimatedTextProps {
  text: string;
  className: string;
}

const Word = memo(function Word({ word }: { word: string }) {
  const characters = word.split("");

  return (
    <motion.span
      className="word inline-flex overflow-hidden"
      variants={fadeVariants("opacity")}
      transition={{
        staggerChildren: 0.1,
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block first-of-type:capitalize "
          variants={fadeVariants("opacity")}
          transition={{ type: "spring", damping: 20 }}
        >
          {char}
        </motion.span>
      ))}
      <span>&nbsp;</span>
    </motion.span>
  );
});

const AnimatedText = memo(function AnimatedText({
  text,
  className,
}: AnimatedTextProps) {
  const words = text.split(" ");
  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      className={`w-fit overflow-hidden  ${className}`}
    >
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </motion.div>
  );
});

export default AnimatedText;
