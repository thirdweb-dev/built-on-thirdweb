import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { HomepageSection } from "./HomePageSection";
import { default as NextLink } from "next/link";

export const Hero: FC = () => {
  return (
    <HomepageSection maxW="1440px">
      <Flex
        alignItems="center"
        as="section"
        justify={{
          base: "center",
          md: "space-between",
        }}
        px={{
          base: 4,
          md: 8,
        }}
        w="full"
        maxW="1440px"
        minH="400px"
      >
        <Flex flexDir="column" gap={4}>
          <Heading
            as="h1"
            fontSize={{
              base: "32px",
              md: "64px",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            Built on thirdweb
          </Heading>

          <Text fontSize="24px" as="h2">
            A collection of projects built on thirdweb
          </Text>
          <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
            <NextLink href="/#projects">
              <Button
                background="rgba(255,255,255,1)"
                _hover={{
                  background: "rgba(255,255,255,0.9)!important",
                }}
                borderRadius="md"
                minW={{ base: "100%", md: "200px" }}
                color="black"
              >
                Explore Projects
              </Button>
            </NextLink>

            <Link isExternal href="https://thirdweb.com">
              <Button
                background="rgba(255, 255, 255, 0.08)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="md"
                minW={{ base: "100%", md: "200px" }}
                color="white"
                fontSize="18px"
                fontWeight="500"
                rightIcon={<ArrowForwardIcon />}
              >
                Build with us
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </HomepageSection>
  );
};
