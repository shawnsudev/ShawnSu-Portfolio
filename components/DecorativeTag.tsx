import { Box, BoxProps } from "@chakra-ui/react";

type DecorativeTagProps = BoxProps & {
  content: string;
  hExpand?: string;
  vExpand?: string;
};

const DecorativeTag = ({
  children,
  content,
  hExpand,
  vExpand,
}: DecorativeTagProps) => {
  return (
    <Box
      _before={{
        content: `"<${content}>"`,
        color: "lightgray",
        fontFamily: "'Fasthand', cursive",
        fontWeight: "light",
        position: "relative",
        right: hExpand ? hExpand : "1rem",
        bottom: vExpand ? vExpand : "0rem",
      }}
      _after={{
        content: `"</${content}>"`,
        color: "lightgray",
        fontFamily: "'Fasthand', cursive",
        fontWeight: "light",
        position: "relative",
        right: hExpand ? hExpand : "1rem",
        bottom: vExpand ? `-${vExpand}` : "0rem",
      }}
    >
      {children}
    </Box>
  );
};

export default DecorativeTag;
