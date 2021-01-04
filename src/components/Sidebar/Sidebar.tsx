import { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { SidebarContent } from 'components/Sidebar/SidebarContent';
import { PageMeta } from 'utils/getQuestions';

type Props = {
  pagesMeta: PageMeta[];
};

export const Sidebar = ({ pagesMeta }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={ref}
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      top="4.5rem"
      mt="4.5rem"
      w="300px"
      h="calc(((100vh - 1.5rem) - 64px) - 42px);"
      pl={4}
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
    >
      <SidebarContent routes={pagesMeta} />
    </Box>
  );
};
