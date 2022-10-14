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
import Navbar from "./navbar";

const Home: NextPage = () => {
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
      // scale: isInView ? [1, 1.3, 0.85, 1.1, 0.9, 1.05, 1] : 1,
      scale: isInView ? 1 : 1.2,
      display: "inline-block",
      transition: {
        // ease: "easeOut",
        // duration: 0.5,
        // times: [0, 0.1, 0.2, 0.5, 0.6, 0.7, 1],
        type: "spring",
        damping: 5,
        stiffness: 600,
        // restDelta: 0.001,
      },
    },
    // animate:{{}}
  };
  const title = ["Hi", "I'm Shawn,", "newly minted Web Dev"];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={styles.main}>
        <motion.div
          ref={ref}
          variants={rubberbandContainer}
          initial="hidden"
          animate="show"
        >
          <h1 className={`${styles.title} rubberband-group`}>
            {title.map((line, idx) => (
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
          </h1>
        </motion.div>
      </main>

      <Projects />

      <Skills />

      <Contact />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
