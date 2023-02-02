import ProjectType from "@/types/ProjectType";
import { Flex, Grid, Heading, Select, Text } from "@chakra-ui/react";
import { projects } from "data/projects";
import { FC, useEffect } from "react";
import { useState } from "react";
import { MobileFilter } from "./Filters";
import { PaginationHelper } from "./PaginationHelper";
import { ProjectCard } from "./ProjectCard";

const Projects: FC = () => {
  const projectsPerPage = 20;

  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectType[]>(projects);
  const [page, setPage] = useState(1);
  const [paginatedProjects, setPaginatedProjects] = useState<ProjectType[]>([
    ...filteredProjects.slice(0, projectsPerPage),
  ]);

  const handleFilter = (value: string) => {
    setFilter(value);
    if (value === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project?.industry?.includes(value))
      );
    }
  };

  useEffect(() => {
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    setPaginatedProjects(filteredProjects.slice(start, end));
  }, [filteredProjects, page]);

  const options = [
    "All",
    "Art",
    "Fashion",
    "Finance",
    "Gaming",
    "Music",
    "Other",
    "Social Media",
    "Tech",
  ];

  return (
    <Flex
      alignItems="center"
      as="section"
      flexDir="column"
      overflow="visible"
      position="relative"
      w="100%"
      zIndex={2}
      id="projects"
      mt={20}
      px={4}
      maxW="1440px"
      pb={20}
    >
      <Heading color="white" fontSize="48px">
        Projects
      </Heading>

      <MobileFilter
        filter={filter}
        handleFilter={handleFilter}
        options={options}
      />

      <Grid
        mt={8}
        gap={8}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        px={4}
      >
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>

      <PaginationHelper
        page={page}
        setPage={setPage}
        projectsPerPage={projectsPerPage}
        totalItems={filteredProjects.length}
      />
    </Flex>
  );
};

export default Projects;
