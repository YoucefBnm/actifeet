export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0px 0px, 100% 0%, 100% 100%, 0px 100%)",
  },
  hidden: {
    clipPath: "polygon(0px 0px, 100% 0%, 100% 0px, 0px 0px)",
  },
};

export type fadeDirectionType =
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "opacity"
  | "z";

export const fadeVariants = (direction: fadeDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-120%" : direction === "right" ? "120%" : 0,
    y: direction === "top" ? "-120%" : direction === "bottom" ? "120%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: direction === "opacity" ? 0 : 1,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
});
