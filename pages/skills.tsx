import {
  Box,
  Flex,
  Grid,
  GridItem,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { rubberband } from "../utils/animation";

const Skills: NextPage = () => {
  const [pageTitle, setPageTitle] = useState("Skills & Experience".split(""));
  const [skills, setSkills] = useState([
    { name: "Frontend", value: 80, colorScheme: "purple" },
    { name: "Backend", value: 60, colorScheme: "cyan" },
    { name: "ReactJS", value: 60, colorScheme: "green" },
    { name: "Typescript", value: 50, colorScheme: "red" },
    { name: "NextJS", value: 40, colorScheme: "yellow" },
  ]);

  useEffect(() => {
    if (process.browser) {
      // verify client/browser environment
    }
  });

  return (
    <div>
      {/* Title */}
      <Text as="h2" fontSize="50px" fontWeight="900">
        {/* Skills & Experience */}
        {pageTitle.map((L) => (
          <span onMouseEnter={rubberband}>{L}</span>
        ))}
      </Text>
      <SimpleGrid columns={2} spacing={5}>
        {/* Text  */}

        {/* <Flex shrink={2}> */}
        <Text>
          My skills including frontend, backend, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores possimus officia dignissimos
          impedit, tempora exercitationem? Iure eaque quo amet reiciendis
          magnam. Autem officiis delectus quod dolore quasi quas odit iusto.
        </Text>
        {/* </Flex> */}

        {/* Progress Bars */}
        <Grid>
          {skills.map((skill) => (
            <GridItem>
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
      </SimpleGrid>
    </div>
  );
};

export default Skills;
