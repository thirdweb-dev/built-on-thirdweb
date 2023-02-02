import { Box, Container, Flex, Icon, Link } from "@chakra-ui/react";
import { SiDiscord } from "@react-icons/all-files/si/SiDiscord";
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter";
import { SiYoutube } from "@react-icons/all-files/si/SiYoutube";
import React from "react";
import { Logo } from "./Logo";

export const Nav: React.FC = () => {
  return (
    <Box
      as="header"
      bg="black"
      left={0}
      position="sticky"
      top={0}
      transition="all 50ms"
      w="100%"
      willChange="backdrop-filter background-color"
      zIndex="overlay"
      maxW="1440px"
    >
      <Container
        align="center"
        as={Flex}
        flexDir="row"
        justify="space-between"
        maxW="container.page"
        py={4}
      >
        <Logo color="#fff" forceShowWordMark />
        <Flex gap={6} align="center">
          <Link>Submit a project</Link>
          <Link href="https://twitter.com/thirdweb" isExternal>
            <Icon
              aria-label="twitter"
              as={SiTwitter}
              bg="transparent"
              color="gray.50"
              height="1rem"
              width="1rem"
            />
          </Link>

          <Link href="https://discord.gg/thirdweb" isExternal>
            <Icon
              aria-label="discord"
              as={SiDiscord}
              bg="transparent"
              boxSize="1rem"
              color="gray.50"
            />
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCdzMx7Zhy5va5End1-XJFbA"
            isExternal
          >
            <Icon
              aria-label="YouTube"
              as={SiYoutube}
              bg="transparent"
              boxSize="1rem"
              color="gray.50"
            />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
