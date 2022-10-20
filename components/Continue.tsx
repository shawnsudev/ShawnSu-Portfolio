import { Heading, PropsOf, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { NextPage } from "next";
import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";
import { rubberband } from "../utils/animation";
import { v4 as uuidv4 } from "uuid";

const Continue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div ref={ref}>
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
        <Text color="gray" size="xl" align={"center"} marginTop="10rem">
          ⇓
        </Text>
      </motion.div>
    </div>
  );
};

export default Continue;
