import { BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeInContainer = {
  show: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const fadeInItem = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

type FadeInTransitionProps = BoxProps & {
  once?: boolean;
  key?: string | number;
};

export const FadeInContainer = ({
  children,
  once = true,
}: FadeInTransitionProps) => {
  return (
    <motion.div
      variants={fadeInContainer}
      initial="hidden"
      whileInView="show"
      // viewport={{ once, amount: 0.3 }}
      viewport={{ once, amount: "some" }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInItem = ({
  // key,
  children,
}: FadeInTransitionProps) => {
  return (
    <motion.div
      // key={key}
      variants={fadeInItem}
    >
      {children}
    </motion.div>
  );
};
