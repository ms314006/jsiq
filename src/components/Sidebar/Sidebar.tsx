import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { RouteItem, SidebarContent } from 'components/Sidebar/SidebarContent';

const routes: RouteItem[] = [
  {
    title: "What's the difference between undefined and null?",
    path: '/overview/1',
  },
  {
    title: 'What does the && operator do?\n',
    path: '/overview/2',
  },
];

export const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={ref}
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      top="6.5rem"
      w="300px"
      h="100%"
      pl={4}
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
    >
      <SidebarContent routes={routes} />
    </Box>
  );
};
