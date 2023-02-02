import { Text } from "@chakra-ui/react";
import { FC } from "react";
import MainLayout from "../../Layouts/MainLayout";

const Project: FC = () => {
  // const { id } = useRouter().query;
  // const project = projects.find((project) => project.id === id);
  // const { name, image, creator, creatorLink, description, tags, links, tech } =
  //   (project as ProjectType) || {
  //     name: "",
  //     image: "",
  //     creator: "",
  //     creatorLink: "",
  //     description: "",
  //     tags: [],
  //     links: {
  //       github: "",
  //       live: "",
  //     },
  //   };

  return (
    <MainLayout>
      {/* <Flex justify="space-evenly" overflowX="hidden" pt={20} zIndex={2}>
        <Flex flexDir="column">
          <NextLink href="/">
            <ChevronLeftIcon h={10} w={10} />
          </NextLink>

          <Image alt={name} src={image} w="40vw" />
          <Heading mt={4}>Tags</Heading>
          {tags && (
            <Flex gap={2} wrap="wrap">
              {tags.map((tag) => (
                <Badge
                  colorScheme="purple"
                  key={tag}
                  variant="solid"
                  w="min-content"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>
          )}
          <Heading mt={4}>Tech used</Heading>
          {tech && (
            <Flex gap={2} wrap="wrap">
              {tech.map((tech) => (
                <Badge
                  colorScheme="purple"
                  key={tech}
                  variant="solid"
                  w="min-content"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          )}
        </Flex>

        <Flex flexDir="column" gap={2} ml={20} mt={10} w="40vw">
          <Heading>{name}</Heading>
          <Link href={creatorLink}>{creator}</Link>
          <Text>{description}</Text>
          <Flex gap={2}>
            {links.github && (
              <Link href={links.github} passHref>
                <Icon
                  as={SiGithub}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                  }}
                  width={8}
                  height={8}
                  rounded="md"
                  px={1}
                />
              </Link>
            )}
            {links.website && (
              <Link href={links.website} passHref>
                <Icon
                  as={FiGlobe}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                  }}
                  width={8}
                  height={8}
                  rounded="md"
                  px={1}
                />
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex> */}
      <Text>gm</Text>
    </MainLayout>
  );
};
export default Project;
