import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { useRef } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband } from "../utils/animation";
import styles from "../styles/Home.module.css";
import Continue from "../components/Continue";

const Projects: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const container = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: isInView ? 0 : 100,
      opacity: isInView ? 1 : 0,
      transition: isInView
        ? {
            delayChildren: 1,
            staggerChildren: 0.3,
          }
        : {},
    },
  };
  const item = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: isInView ? 0 : 100,
      opacity: isInView ? 1 : 0,
      transition: { ease: "easeOut", duration: 1 },
    },
  };
  const pageTitle = ["My Projects"];

  return (
    <Box className={styles.main}>
      <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
      {/* <Heading as="h2" className="rubberband-group">
        {"Projects".split("").map((L, i) => (
          <span key={"p" + i} onMouseEnter={rubberband}>
            {L}
          </span>
        ))}
      </Heading> */}

      {/* Personal Projects */}
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Box>
          <Heading as="h3">Personal Projects</Heading>
          <Flex justify="space-around">
            <motion.div variants={item}>
              <Heading as="h4">Sudoku</Heading>
            </motion.div>
            <motion.div variants={item}>
              <Heading as="h4">Game of Life</Heading>
            </motion.div>
          </Flex>
        </Box>
      </motion.div>

      {/* School Projects */}
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Box>
          <Heading as="h3">School Projects</Heading>
          <Flex justify="space-around">
            <motion.div variants={item}>
              <Heading as="h4">project 1</Heading>
            </motion.div>
            <motion.div variants={item}>
              <Heading as="h4">project 2</Heading>
            </motion.div>
          </Flex>
        </Box>
      </motion.div>

      <Continue />
    </Box>
  );
};

export default Projects;
