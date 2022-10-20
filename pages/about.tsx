import { Box, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import { RefAttributes, useRef } from "react";
import Continue from "../components/Continue";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const pageTitle = ["About me", "Page"];

  return (
    <Box className={styles.main}>
      <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
      <Text as="p">
        I had been a business/English tutor for international tertiary students
        since 2013 until the Pandemic, during which I retrained to be a Frontend
        Web Developer. I have a passion for learning new technologies and
        applying them to create fluid and modern web UX for users.
      </Text>
      <Text as="p">
        Well-organised, detail-oriented, independent thinker/problem-solver.
      </Text>
      <Text as="p">
        My personal interests include reading non-fiction books, Yoga and
        Calisthenics exercising, and playing highly challenging soulslike video
        games.
      </Text>
      
      <Continue />
    </Box>
  );
};
export default About;
