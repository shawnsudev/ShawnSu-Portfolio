import { Box, DividerProps, Heading, PropsOf, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { ForwardedRef, forwardRef, MutableRefObject, useEffect } from "react";
import { rubberband } from "../utils/animation";
import { v4 as uuidv4 } from "uuid";

type TitleAnimationProps = {
  titleTexts: string[];
  // ref: MutableRefObject<null>;
  isInView: boolean;
};

const scaleParams = {
  type: "spring",
  damping: 8,
  stiffness: 800,
  bounce: 1,
};

// Link for how to define type for forwardRef(): https://www.carlrippon.com/react-forwardref-typescript/
const PageTitle = forwardRef(
  ({ titleTexts, isInView }: TitleAnimationProps, ref: ForwardedRef<null>) => {
    const fadeinRubberbandContainer = {
      hidden: { opacity: 0 },
      show: {
        opacity: isInView ? 1 : 0,
        transition: isInView
          ? {
              delayChildren: 0.5,
              staggerChildren: 0.07,
            }
          : {},
      },
    };
    const fadeinRubberbandItem = {
      hidden: {
        opacity: 0,
        scaleX: 1.5,
        scaleY: 0.5,
      },

      show: {
        opacity: isInView ? 1 : 0,
        scaleX: isInView ? 1 : 0,
        scaleY: isInView ? 1 : 0,
        display: "inline-block",
        transition: {
          opacity: {
            type: "tween",
            ease: "easeOut",
          },
          scaleX: scaleParams,
          scaleY: scaleParams,
        },
      },
    };

    return (
      <Box ref={ref}>
        <motion.div
          variants={fadeinRubberbandContainer}
          initial="hidden"
          animate="show"
        >
          <Heading as="h2" color="purple.500" size="2xl">
            {titleTexts.map((line) => (
              <p key={uuidv4()}>
                {line.split("").map((L) =>
                  L === " " ? (
                    " "
                  ) : (
                    <motion.span key={uuidv4()} variants={fadeinRubberbandItem}>
                      <span onMouseEnter={rubberband}>{L}</span>
                    </motion.span>
                  )
                )}
              </p>
            ))}
          </Heading>
          {/* ;<h1 className={`${styles.title} rubberband-group`}></h1> */}
        </motion.div>
      </Box>
    );
  }
);
// Deployed failed due to an Error: Component definition is missing display name  react/display-name
PageTitle.displayName = "PageTitle";

export default PageTitle;
