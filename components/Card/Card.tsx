// prettier-ignore
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, BoxProps, Button, Collapse, Flex, Heading, HStack, Image, Link, LinkBox, LinkOverlay, StackDivider, Tag, TagLabel, TagRightIcon, Text, useDisclosure, VStack, } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import ToolStack, { ToolNames } from "../ToolStack";
import Accordion_ from "./AccordionItem";

type AccordionItem = { title: string; content: string };

export type CardData = {
  [index: string]: string | ToolNames[] | AccordionItem[];
  name: string;
  img: string;
  focus: string;
  description: string;
  tools: ToolNames[];
  link: string;
  source: string;
  details: AccordionItem[];
  highlights: AccordionItem[];
};
type CardProps = BoxProps & { card: CardData };

const Card = ({ card, w }: CardProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="relative" top="-3rem">
      <Image
        src={card.img}
        alt={`Image of ${card.name}`}
        w="10rem"
        margin="1rem auto"
        position={"relative"}
        top="6rem"
        bg="white"
        border=".7rem solid white"
        borderRadius="1rem"
        boxShadow="-0.5rem 0.5rem .5rem lightgray, 0.5rem 0.5rem .5rem lightgray"
        zIndex="2"
      />
      <Box
        w={w}
        // border="1px solid lightgray"
        borderRadius=".5rem"
        bg="white"
        padding="2rem"
        textAlign={"center"}
        boxShadow="-0.5rem 0.5rem .5rem whitesmoke, 0.5rem 0.5rem .5rem whitesmoke"
      >
        <Box h="3rem" />
        <NextLink href={card.link}>
          <Heading as="h4" size="md" margin="1rem" textTransform={"uppercase"}>
            <Link>{card.name}</Link>
          </Heading>
        </NextLink>
        <VStack
          divider={<StackDivider />}
          spacing="1rem"
          textAlign="left"
          align="left"
        >
          <Box>
            <Box>{card.description}</Box>
            <Flex justify={"space-between"} mt="1rem">
              <Link href={card.link} isExternal>
                <Text
                  as="div"
                  size="xs"
                  textTransform="uppercase"
                  color="purple.400"
                >
                  <Flex align="center">
                    <Text marginRight={"0.3rem"}>check it out</Text>
                    {React.createElement(FiExternalLink)}
                  </Flex>
                </Text>
              </Link>
              <Link href={card["source"]} isExternal>
                <Text
                  as="div"
                  size="xs"
                  textTransform="uppercase"
                  color="purple.400"
                >
                  <Flex align="center">
                    <Text marginRight={"0.3rem"}>Source Code </Text>
                    {React.createElement(SiGithub)}
                  </Flex>
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Focus
            </Heading>
            {card.focus}
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" mb={2}>
              Tech Stack
            </Heading>
            <ToolStack toolNames={card.tools} />
          </Box>

          <Box>
            <Button onClick={onToggle} colorScheme="purple" bg="purple.300">
              {isOpen ? "Read Less" : "Read More"}
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box mt="4" rounded="md" shadow="md">
                <Box>
                  <Heading size="xs" textTransform="uppercase" mb={2}>
                    Details
                  </Heading>
                  <Accordion_ card={card} section="details" />
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase" mt={6} mb={2}>
                    Learning Highlights
                  </Heading>
                  <Accordion_ card={card} section="highlights" />
                </Box>
              </Box>
            </Collapse>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
