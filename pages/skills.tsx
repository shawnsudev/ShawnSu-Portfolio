import {
  Box,
  Flex,
  // forwardRef,
  Grid,
  GridItem,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import { forwardRef, useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";
import { rubberband, runRubberbandIn } from "../utils/animation";

const Skills: NextPage = (props) => {
  // const [pageTitle, setPageTitle] = useState("Skills & Experience".split(""));
  const [skills, setSkills] = useState([
    { name: "Frontend", value: 80, colorScheme: "purple" },
    { name: "Backend", value: 60, colorScheme: "cyan" },
    { name: "ReactJS", value: 60, colorScheme: "green" },
    { name: "Typescript", value: 50, colorScheme: "red" },
    { name: "NextJS", value: 40, colorScheme: "yellow" },
  ]);
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

  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0.3 });
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
      // scale: isInView ? 1 : 1.2,
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
    <div>
      {/* Title */}
      <PageTitle
        ref={ref}
        isInView={isInView}
        pageTitle={["Skills", "&", "Experiences"]}
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <SimpleGrid columns={2} spacing={5}>
          <motion.div variants={item}>
            <Text>
              My skills including frontend, backend, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores possimus officia dignissimos
              impedit, tempora exercitationem? Iure eaque quo amet reiciendis
              magnam. Autem officiis delectus quod dolore quasi quas odit iusto.
            </Text>
          </motion.div>

          {/* Progress Bars */}
          <motion.div variants={item}>
            <Grid>
              {skills.map((skill, i) => (
                <GridItem key={"gr" + i}>
                  <label>{skill.name}</label>
                  <Progress
                    id="frontends"
                    colorScheme={skill.colorScheme}
                    value={skill.value}
                    hasStripe={true}
                    isAnimated={true}
                    size="xs"
                  />
                </GridItem>
              ))}
            </Grid>
          </motion.div>
        </SimpleGrid>
      </motion.div>
    </div>
  );
};
export default Skills;
