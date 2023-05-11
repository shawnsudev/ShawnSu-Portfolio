// prettier-ignore
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionItemProps, AccordionPanel, Box, Text,  } from "@chakra-ui/react";
import React from "react";
import { CardData } from "./Card";

type AccordionProps_ = { card: CardData; section: string } & AccordionItemProps;

const Accordion_ = ({ card, section }: AccordionProps_) => {
  return (
    <Accordion allowToggle>
      {section === "details" || section === "highlights"
        ? card[section].map((item, i) => (
            <AccordionItem key={i}>
              <h2>
                <AccordionButton>
                  <Text
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily="Times New Roman"
                    fontWeight="500"
                  >
                    {item.title}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.content.map((text, j) => (
                  <Box key={j}>
                    {/* use React dangerouslySetInnerHTML property to allow customised html formatting */}
                    {<div dangerouslySetInnerHTML={{ __html: text }} />}

                    {/* add line break between paragraphs */}
                    {j === item.content.length - 1 ? null : <br />}
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))
        : null}
    </Accordion>
  );
};

export default Accordion_;
