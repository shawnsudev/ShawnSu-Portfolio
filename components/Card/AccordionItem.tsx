// prettier-ignore
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionItemProps, AccordionPanel, Box,  } from "@chakra-ui/react";
import React from "react";
import { CardData } from "./Card";

type AccordionProps_ = { card: CardData; section: string } & AccordionItemProps;

const Accordion_ = ({ card, section }: AccordionProps_) => {
  return (
    <Accordion allowToggle>
      {section === "details" || section === "highlights"
        ? card[section].map((item) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.content.map((text, i) => (
                  <>
                    <p>{text}</p>
                    {(i=== item.content.length-1? null: <br />)}
                  </>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))
        : null}
    </Accordion>
  );
};

export default Accordion_;
