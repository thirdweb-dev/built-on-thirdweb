import { Flex } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { Nav } from '../components/Nav';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      as="main"
      bg="#030A1A"
      color="white"
      direction="column"
      flexDir="column"
      height="100vh"
      sx={{
        '--chakra-colors-heading': '#F2F2F7',
        '--chakra-colors-paragraph': '#AEAEB2',
        '--chakra-colors-borderColor': 'rgba(255,255,255,0.1)',
      }}
    >
      <Nav />
      {children}
    </Flex>
  );
};

export default MainLayout;
