import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import ToolStack from "./ToolStack";

type CardData = {
  name: string;
  img: string;
  description: string;
  tools: string[];
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
              <Heading as="h4" size="md" margin="1rem">
                {card.name}
              </Heading>
            </LinkOverlay>
          </NextLink>
          <VStack spacing="1rem" textAlign="left" align="left">
            <Text>{card.description}</Text>
            <Box>
              Tech stack:{" "}
              <ToolStack toolNames={card.tools} />
            </Box>
            <Box>
              Learning highlights:{" "}
              <HStack spacing=".3rem" wrap="wrap">
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
