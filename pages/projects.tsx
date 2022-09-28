import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { rubberband } from "../utils/animation";

const Projects: NextPage = () => {
  return (
    <Box>
      <Heading
        as="h2"
        className="rubberband-group"
        // fontSize="50px"
        // fontWeight="900"
      >
        {"Projects".split("").map((L) => (
          <span onMouseEnter={rubberband}>{L}</span>
        ))}
      </Heading>
      {/* Personal Projects */}
      <Box>
        <Heading as="h3">Personal Projects</Heading>
        <Flex justify="space-around">
          <Heading as="h4">Sudoku</Heading>
          <Heading as="h4">Game of Life</Heading>
        </Flex>
      </Box>

      <Box>
        <Heading as="h3">School Projects</Heading>
        <Flex></Flex>
      </Box>
    </Box>
  );
};

export default Projects;
