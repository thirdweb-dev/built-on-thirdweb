import Projects from "@/components/Projects";
import { Hero } from "@/components/Sections";
import MainLayout from "@/Layouts/MainLayout";
import { VStack } from "@chakra-ui/react";
import type { FC } from "react";

const Home: FC = () => {
  return (
    <MainLayout>
      <VStack
        maxW="100vw"
        overflowX="hidden"
        pt={{
          base: 0,
          md: 20,
        }}
        w="full"
        zIndex={2}
      >
        <Hero />
        <Projects />
      </VStack>
    </MainLayout>
  );
};

export default Home;
