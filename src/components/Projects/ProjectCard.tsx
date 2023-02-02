import { Badge, Flex, Heading, Image, Link } from "@chakra-ui/react";
import type { FC } from "react";
import ProjectType from "../../types/ProjectType";

interface ProjectCardProps {
  project: ProjectType;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, dashboardURL, url } = project;

  const URL = url || dashboardURL || "";

  return (
    <Link
      href={URL}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        _hover={{
          boxShadow: "lg",
          transform: "translateY(-2px)",
          bg: "whiteAlpha.200",
        }}
        as="article"
        bg="whiteAlpha.100"
        borderRadius="md"
        boxShadow="md"
        flexDir="column"
        transition="all 0.2s"
        w="full"
        maxW="90vw"
      >
        <Image
          alt={title}
          src="https://nextjs.org/_next/static/media/twitch.5e75fd8c.jpg"
          w="full"
          borderBottom="1px solid #e2e8f0"
          roundedTop="md"
        />

        <Heading
          fontSize="18px"
          ml={4}
          h={16}
          display="flex"
          alignItems="center"
        >
          {title}
        </Heading>
      </Flex>
    </Link>
  );
};
