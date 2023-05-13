import { Box, Heading, PropsOf, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Continue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <Box ref={ref}>
      <motion.div
        // initial="hidden"
        animate={{
          y: isInView ? "1rem" : "0",
        }}
        transition={{
          delay: 5,
          duration: 0.7,
          ease: "easeInOut",
          repeatType: "reverse",
          repeat: Infinity,
        }}
      >
        <Text color="gray" size="xl" align={"center"} marginY="8rem">
          ⇓
        </Text>
      </motion.div>
    </Box>
  );
};

export default Continue;
