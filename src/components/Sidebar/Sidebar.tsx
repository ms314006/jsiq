import { Scrollbars } from 'rc-scrollbars';
import { Box, Flex, Center, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { SidebarContent } from 'components/Sidebar/SidebarContent';
import { PageMeta } from 'utils/getQuestions';
import { questionsRoutes } from 'config/routes';
import Image from 'next/image';
import { LanguageNavBar } from './LanguageNavBar';

type Props = {
  pagesMeta: PageMeta[];
};

export const MainNavLink = ({ href, icon, children }) => {
  const { pathname } = useRouter();
  const group = href.split('/')[2];
  const active = pathname.includes(group);

  const linkColor = useColorModeValue('gray.700', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref>
      <Flex
        as="a"
        align="center"
        fontSize="sm"
        fontWeight="semibold"
        transitionProperty="colors"
        transitionDuration="200ms"
        color={active ? linkColor : 'gray.500'}
        _hover={{ color: linkColor }}
      >
        <Center w="6" h="6" rounded="base" mr="3">
          <Image src={icon} alt={children} width={30} height={30} />
        </Center>
        {children}
      </Flex>
    </NextLink>
  );
};

export const mainNavLinks = [
  {
    icon: '/icons/javascript.svg',
    href: questionsRoutes.javascript,
    label: 'JavaScript',
  },
  {
    icon: '/icons/react.svg',
    href: questionsRoutes.react,
    label: 'React',
  },
  {
    icon: '/icons/angular.svg',
    href: questionsRoutes.angular,
    label: 'Angular',
  },
];

export const Sidebar = ({ pagesMeta }: Props) => {
  return (
    <Box
      as="nav"
      aria-label="Main Navigation"
      pos="sticky"
      top="4.5rem"
      w="300px"
      h="calc(100vh - 5rem);"
      pl={4}
      overflow="hidden"
      className="sidebar-content"
      flexShrink={0}
      display={{ base: 'none', md: 'block' }}
    >
      <Scrollbars style={{ width: '100%', height: '100%' }} autoHide universal>
        <LanguageNavBar my={8} />
        <SidebarContent routes={pagesMeta} />
      </Scrollbars>
    </Box>
  );
};
