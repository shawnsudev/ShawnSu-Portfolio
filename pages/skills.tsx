import { Grid, GridItem, Progress } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Skills: NextPage = () => {
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
  );
};

export default Skills;
