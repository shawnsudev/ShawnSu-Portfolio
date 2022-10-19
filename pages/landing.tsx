import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Skills from "./skills";
import animation from "../styles/animation.module.scss";
import { createRef, MouseEvent, useEffect, useRef } from "react";
import { rubberband, runRubberbandIn } from "../utils/animation";
import Projects from "./projects";
import Contact from "./contact";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "./about";
import PageTitle from "../components/PageTitle";
import { Box, Heading } from "@chakra-ui/react";

const Landing: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
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
      // scale: isInView ? 1.2 : 1,
      display: "inline-block",
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 600,
      },
    },
  };
  const title = ["Hello", "I'm Shawn,", "new web developer"];

  return (
    <Box className={styles.landing}>
      <motion.div
        ref={ref}
        variants={rubberbandContainer}
        initial="hidden"
        animate="show"
      >
        <Box
          _before={{
            content: `"<h1>"`,
            color: "silver",
            fontFamily: "'Fasthand', cursive",
            fontWeight: "light",
            position: "relative",
            right: "1.5rem",
          }}
          _after={{
            content: `"</h1>"`,
            color: "silver",
            fontFamily: "'Fasthand', cursive",
            fontWeight: "light",
            position: "relative",
            right: "1.5rem",
          }}
        >
          <Heading as="h1" size="4xl">
            {title.map((line, idx) => (
              <p key={"line" + idx}>
                {line.split("").map((L, i) =>
                  L === " " ? (
                    " "
                  ) : L === "S" ? (
                    <motion.span key={"hello" + i} variants={rubberbandItem}>
                      <span className={styles.logo2} onMouseEnter={rubberband}>
                        {L}
                      </span>
                    </motion.span>
                  ) : (
                    <motion.span key={"hello" + i} variants={rubberbandItem}>
                      <span onMouseEnter={rubberband}>{L}</span>
                    </motion.span>
                  )
                )}
              </p>
            ))}
          </Heading>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Landing;
