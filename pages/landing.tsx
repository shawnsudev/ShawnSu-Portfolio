import type { NextPage } from "next";
import { useRef } from "react";
import { rubberband } from "../utils/animation";
import { motion, useInView } from "framer-motion";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import DecorativeTag from "../components/DecorativeTag";
import Continue from "../components/Continue";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";

const title = ["Hello", "I'm Shawn Su,", "new web developer"];
const scaleParams = {
  type: "spring",
  damping: 8,
  stiffness: 500,
  bounce: 1,
};
const sInShawnProps = {
  fontSize: { base: "4rem", md: "6rem", xl: "8rem" },
  fontWeight: "bold",
  color: "purple.300",
  textShadow: {
    base: ".55rem 0 #F6E05E",
    md: ".85rem 0 #F6E05E",
  },
  // onMouseEnter: rubberband,
};
const sInSuProps = {
  fontSize: { base: "4rem", md: "6rem", xl: "8rem" },
  fontWeight: "bold",
  color: "yellow.300",
  textShadow: {
    base: ".55rem 0 #B794F4",
    md: ".85rem 0 #B794F4",
  },
  // onMouseEnter: rubberband,
};

const Landing: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const rubberbandContainer = {
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
  const rubberbandItem = {
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
          type: "tween", //default setting
          ease: "easeOut",
        },
        scaleX: scaleParams,
        scaleY: scaleParams,
      },
    },
  };

  return (
    <Box
      id="landing"
      // px={{ base: "1rem", sm: "2rem", md: "4rem" }}
    >
      <Box>
        <motion.div
          ref={ref}
          variants={rubberbandContainer}
          initial="hidden"
          animate="show"
        >
          <DecorativeTag content="h1" right="1.5rem">
            <Heading
              as="h1"
              fontSize={{
                base: "2rem",
                sm: "2.7rem",
                md: "3.6rem",
                lg: "4.5rem",
                xl: "5rem",
              }}
            >
              {title.map((line, idx) => (
                <p key={"line" + idx}>
                  {line.split("").map((L, i, arr) =>
                    L === " " ? (
                      " "
                    ) : (
                      <motion.span key={"hello" + i} variants={rubberbandItem}>
                        <Text
                          as="span"
                          onMouseEnter={rubberband}
                          {...(L === "S" && arr[i + 1] === "h"
                            ? { ...sInShawnProps }
                            : L === "S" && arr[i + 1] === "u"
                            ? { ...sInSuProps }
                            : null)}
                        >
                          {L}
                        </Text>
                      </motion.span>
                    )
                  )}
                </p>
              ))}
            </Heading>
          </DecorativeTag>
        </motion.div>

        <FadeInContainer once={false}>
          <DecorativeTag content="p">
            <FadeInItem>
              <Text
                as="p"
                color="blackAlpha.600"
                size="sm"
                letterSpacing={"0.3rem"}
              >
                New Frontend / React.JS Developer
              </Text>
            </FadeInItem>
          </DecorativeTag>

          <DecorativeTag content="button">
            <FadeInItem>
              <Box>
                <Button
                  variant="solid"
                  colorScheme="yellow"
                  letterSpacing={"0.2rem"}
                  fontFamily={"Darumadrop One, cursive"}
                  fontSize={"2xl"}
                  verticalAlign={"top"}
                  p="2rem"
                  _hover={{ color: "white" }}
                >
                  <Link href="/#projects" _hover={{ textDecoration: "none" }}>
                    My Portfolio
                  </Link>
                </Button>
              </Box>
            </FadeInItem>
          </DecorativeTag>
        </FadeInContainer>
      </Box>

      <Continue />
    </Box>
  );
};

export default Landing;
