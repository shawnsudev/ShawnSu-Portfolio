import {
  Box,
  BoxProps,
  Heading,
  Image,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

type CardData = {
  name: string;
  img: string;
  description: string;
  stacks: string[];
  highlights: string[];
  link: string;
};
type CardProps = BoxProps & { card: CardData };

const Card = ({ card }: CardProps) => {
  return (
    <Box>
      <Heading>{card.name}</Heading>
      <Image src={card.img} alt={`Image of ${card.name}`} />
      <Text>{card.description}</Text>
      <Text>Stack: {card.stacks}</Text>
      <Text>Learning highlights: {card.highlights}</Text>
      <NextLink href={card.link} passHref>
        <Link color="purple.400">CHECK IT OUT</Link>
      </NextLink>
    </Box>
  );
};

export default Card;
