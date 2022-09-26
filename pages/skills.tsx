import { Grid, GridItem, Progress } from "@chakra-ui/react";
import { NextPage } from "next";

const Skills: NextPage = () => {
  return (
    <Grid>
      <GridItem>
        <label>Frontend</label>
        <Progress
          colorScheme="cyan"
          value={80}
          hasStripe={true}
          isAnimated={true}
          size="xs"
        />
      </GridItem>
      <GridItem>
        <label>Backend</label>
        <Progress
          colorScheme="green"
          value={60}
          hasStripe={true}
          isAnimated={true}
          size="xs"
        />
      </GridItem>
      <GridItem>
        <label>CSS</label>
        <Progress
          colorScheme="red"
          value={40}
          hasStripe={true}
          isAnimated={true}
          size="xs"
        />
      </GridItem>
      <GridItem>
        <label>Animation</label>
        <Progress
          colorScheme="yellow"
          value={30}
          hasStripe={true}
          isAnimated={true}
          size="xs"
        />
      </GridItem>
    </Grid>
  );
};

export default Skills;
