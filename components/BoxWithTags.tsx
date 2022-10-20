import { Box, BoxProps } from "@chakra-ui/react";

type BoxWithTagsProps = BoxProps & {
  content: string;
  right?: string;
  bottom?: string;
};

const BoxWithTags = ({
  children,
  content,
  right,
  bottom,
}: BoxWithTagsProps) => {

  return (
    <Box
      _before={{
        content: `"<${content}>"`,
        color: "silver",
        fontFamily: "'Fasthand', cursive",
        fontWeight: "light",
        position: "relative",
        right: right ? right : "1.5rem",
        bottom: bottom ? bottom : "0rem",
      }}
      _after={{
        content: `"</${content}>"`,
        color: "silver",
        fontFamily: "'Fasthand', cursive",
        fontWeight: "light",
        position: "relative",
        right: right ? right : "1.5rem",
        bottom: bottom ? `-${bottom}` : "0rem",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxWithTags;
