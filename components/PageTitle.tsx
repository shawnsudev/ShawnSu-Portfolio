import { PropsOf, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { MutableRefObject } from "react";
import { rubberband } from "../utils/animation";

type NextPagePropsWithTransition = NextPage & {
  pageTitle: string[];
  ref: MutableRefObject<null>;
  isInView: boolean;
};

const PageTitle = ({ pageTitle, ref, isInView }: NextPagePropsWithTransition) => {
  const rubberbandContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
      transition: isInView
        ? {
            delayChildren: 1,
            staggerChildren: 0.08,
          }
        : {},
    },
  };
  const rubberbandItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 1.2,
      display: "inline-block",
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 600,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={rubberbandContainer}
      initial="hidden"
      animate="show"
    >
      <Text as="h2" className="rubberband-group">
        {pageTitle.map((line, idx) => (
          <p key={"line" + idx}>
            {line.split("").map((L, i) =>
              L === " " ? (
                " "
              ) : (
                <motion.span key={"hello" + i} variants={rubberbandItem}>
                  <span onMouseEnter={rubberband}>{L}</span>
                </motion.span>
              )
            )}
          </p>
        ))}
      </Text>
      {/* ;<h1 className={`${styles.title} rubberband-group`}></h1> */}
    </motion.div>
  );
};
export default PageTitle;
