import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import { RefAttributes, useRef } from "react";
import DecorativeTag from "../components/DecorativeTag";
import Continue from "../components/Continue";
import {
  FadeInContainer,
  FadeInItem,
} from "../components/FadeInTransition";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const pageTitle = ["About me", "Page"];

  return (
    <Box id="about" className={styles.main}>
      <DecorativeTag content="section" hExpand="2.5rem" vExpand="7rem">
        <Box>
          <DecorativeTag content="h2">
            <PageTitle ref={ref} pageTitle={pageTitle} isInView={isInView} />
          </DecorativeTag>

          <FadeInContainer>
            <SimpleGrid columns={2} spacing={5}>
              <DecorativeTag content="p">
                <FadeInItem>
                  <Text as="p">
                    I had been a business/English tutor for international
                    tertiary students since 2013 until the Pandemic, during
                    which I retrained to be a Frontend Web Developer. I have a
                    passion for learning new technologies and applying them to
                    create fluid and modern web UX for users.
                  </Text>
                </FadeInItem>
              </DecorativeTag>

              <DecorativeTag content="p">
                <FadeInItem>
                  <Text as="p">
                    Well-organised, detail-oriented, independent
                    thinker/problem-solver.
                    <br />
                    <br />
                    My personal interests include reading non-fiction books,
                    Yoga and Calisthenics exercising, and playing highly
                    challenging soulslike video games.
                  </Text>
                </FadeInItem>
              </DecorativeTag>
            </SimpleGrid>
          </FadeInContainer>
        </Box>
      </DecorativeTag>

      <Continue />
    </Box>
  );
};
export default About;
