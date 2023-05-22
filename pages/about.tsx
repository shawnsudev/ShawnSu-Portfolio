import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import { NextPage } from "next";
import { RefAttributes, useRef } from "react";
import DecorativeTag from "../components/DecorativeTag";
import Continue from "../components/Continue";
import { FadeInContainer, FadeInItem } from "../components/FadeInTransition";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";

const About: NextPage = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const pageTitle = ["Me,", "Myself & I"];

  return (
    <Box id="about">
      <DecorativeTag content="section" hExpand="1.5rem" vExpand="3rem">
        <Box>
          <DecorativeTag content="h2">
            <PageTitle ref={ref} titleTexts={pageTitle} isInView={isInView} />
          </DecorativeTag>

          <FadeInContainer>
            <SimpleGrid columns={{base:1, md:2}} spacing={{base:0, md:10}}>
              <DecorativeTag content="p">
                <FadeInItem>
                  <Text as="p">
                    I had been a Business/English tutor for international
                    tertiary students since 2013 until the Covid Pandemic set
                    in. During 2021 - 2022, I completed{" "}
                    <strong>
                      Frontend Development and Backend Development courses
                    </strong>{" "}
                    at{" "}
                    <Link href="https://www.developers.ac.nz" isExternal>
                      Developers Institute
                      <ExternalLinkIcon mx="2px" />
                    </Link>{" "}
                    in New Zealand.
                    <br />
                    <br />I also spent a lot of time to self-teach
                    extra-curricular web dev/computer science knowledge. I have
                    a passion for learning new technologies and applying them to
                    create fluid and modern web UX for users.
                  </Text>
                </FadeInItem>
              </DecorativeTag>

              <DecorativeTag content="p">
                <FadeInItem>
                  <Text as="p">
                    My personal interests include reading non-fiction books,
                    Yoga and Calisthenics exercising, and playing highly
                    challenging soulslike video games.
                    <br />
                    <br />I am a well-organised, detail-oriented, independent
                    thinker/problem-solver.
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
