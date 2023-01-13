// prettier-ignore
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, BoxProps, Heading, HStack, Image, LinkBox, LinkOverlay, StackDivider, Tag, Text, VStack, } from "@chakra-ui/react";
import NextLink from "next/link";
import ToolStack, { ToolNames } from "../ToolStack";

export type CardData = {
  name: string;
  img: string;
  focus: string;
  description: string;
  tools: ToolNames[];
  highlights: string[];
  link: string;
};
type CardProps = BoxProps & { card: CardData };

const Card = ({ card, w }: CardProps) => {
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
      <LinkBox as="div">
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
          <NextLink href={card.link} passHref>
            <LinkOverlay isExternal>
              <Heading
                as="h4"
                size="md"
                margin="1rem"
                textTransform={"uppercase"}
              >
                {card.name}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <VStack
            divider={<StackDivider />}
            spacing="1rem"
            textAlign="left"
            align="left"
          >
            <Box>
              <Text>{card.description}</Text>
              <Text size="xs" textTransform="uppercase" color="purple.300">
                check it out ➤
              </Text>
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
              <Heading size="xs" textTransform="uppercase" mb={2}>
                Details
              </Heading>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase" mb={2}>
                Learning Highlights
              </Heading>
              <HStack spacing=".3rem" wrap="wrap">
                {/* use Accordion component to organise learning highlights so that I can write a lot of stuff but won't crowd the UI */}
                {card.highlights.map((hl) => (
                  <Tag>{hl}</Tag>
                ))}
              </HStack>
            </Box>
          </VStack>
        </Box>
      </LinkBox>
    </Box>
  );
};

export default Card;
