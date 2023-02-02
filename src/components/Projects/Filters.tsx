import type { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Flex,
} from "@chakra-ui/react";

interface IMobileFilter {
  options: string[];
  handleFilter: (value: string) => void;
  filter: string;
}

export const MobileFilter: FC<IMobileFilter> = ({
  options,
  handleFilter,
  filter,
}) => {
  const textStyles = (option: string) => {
    return {
      mr: 4,
      color: "white",
      opacity: filter === option ? 1 : 0.5,
      cursor: "pointer",
      fontWeight: filter === option ? "bold" : "normal",
      px: 4,
      fontSize: "24px",
    };
  };

  return (
    <>
      <Accordion display={{ base: "flex", md: "none" }} mt={8} allowToggle>
        <AccordionItem w="90vw">
          <AccordionButton>
            <Text>Filters</Text>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex flexDir="column" gap={2}>
              {options.map((option) => (
                <Text
                  onClick={() => handleFilter(option)}
                  key={option}
                  {...textStyles(option)}
                >
                  {option}
                </Text>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex
        alignItems="center"
        mt={8}
        display={{ base: "none", md: "flex" }}
        wrap="wrap"
        justify="center"
      >
        {options.map((option) => (
          <Text
            onClick={() => handleFilter(option)}
            key={option}
            {...textStyles(option)}
          >
            {option}
          </Text>
        ))}
      </Flex>
    </>
  );
};
