/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import {
  chakra,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButtonProps,
  Link,
  Center,
  Box,
  CloseButton,
  useColorModeValue,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { siteConfig, route } from 'config';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import NavLink from './NavLink';
import { useRouter } from 'next/router';
import { PageMeta } from 'utils/getQuestions';
import { SidebarContent } from './Sidebar/SidebarContent';

const GithubIcon = (props) => (
  <svg viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
    />
  </svg>
);

const MobileNavButton = React.forwardRef((props: IconButtonProps, ref: React.Ref<any>) => {
  return (
    <IconButton
      ref={ref}
      display={{ base: 'flex', md: 'none' }}
      aria-label="Open menu"
      fontSize="20px"
      color={useColorModeValue('gray.800', 'inherit')}
      variant="ghost"
      icon={<AiOutlineMenu />}
      {...props}
    />
  );
});

function MobileNavLink({ href, children }) {
  const { pathname } = useRouter();

  const [, group] = href.split('/');
  const isActive = pathname.includes(group);

  return (
    <NextLink href={href}>
      <Center
        flex="1"
        minH="40px"
        as="button"
        rounded="md"
        transition="0.2s all"
        fontWeight={isActive ? 'semibold' : 'medium'}
        bg={isActive ? 'yellow.300' : undefined}
        borderWidth={isActive ? undefined : '1px'}
        color={isActive ? 'black' : undefined}
        _hover={{
          bg: isActive ? 'yellow.400' : useColorModeValue('gray.100', 'whiteAlpha.100'),
        }}
      >
        {children}
      </Center>
    </NextLink>
  );
}

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
  meta?: PageMeta[];
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose, meta } = props;

  return (
    <>
      {isOpen && (
        <Flex
          direction="column"
          w="100%"
          bg={useColorModeValue('white', 'gray.800')}
          h="100vh"
          overflow="auto"
          pos="absolute"
          top="0"
          left="0"
          zIndex={20}
          pb="8"
        >
          <Box>
            <Flex justify="space-between" px="6" pt="5" pb="4">
              <HStack spacing="5">
                <CloseButton onClick={onClose} />
              </HStack>
            </Flex>

            <Box px="6" pb="6" pt="2">
              <HStack>
                <MobileNavLink href={route.overview}>Overview</MobileNavLink>
                <MobileNavLink href={route.quiz}>Quiz</MobileNavLink>
                <MobileNavLink href={route.about}>About</MobileNavLink>
              </HStack>
            </Box>

            {meta && <SidebarContent routes={meta} />}
          </Box>
        </Flex>
      )}
    </>
  );
}

type Props = {
  meta?: PageMeta[];
};

function HeaderContent({ meta }: Props) {
  const mobileNav = useDisclosure();
  const mobileNavBtnRef = useRef<HTMLButtonElement>();

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <NextLink href="/" passHref>
            <chakra.a display="block" aria-label="JSIQ, Back to homepage">
              <Heading>{siteConfig.title}</Heading>
            </chakra.a>
          </NextLink>

          <HStack as="nav" spacing="3" ml="48px" display={{ base: 'none', md: 'flex' }}>
            <NavLink href={route.overview}>Overview</NavLink>
            <NavLink href={route.quiz}>Quiz</NavLink>
            <NavLink href={route.about}>About</NavLink>
          </HStack>
        </Flex>

        <Flex maxW="720px" align="center" color="gray.400">
          <HStack spacing="8">
            <Link isExternal aria-label="GitHub" href={siteConfig.github.link}>
              <Icon
                as={GithubIcon}
                transition="color 0.2s"
                w="5"
                h="5"
                _hover={{ color: useColorModeValue('gray.600', 'gray.200') }}
              />
            </Link>
          </HStack>

          <ColorModeSwitcher />

          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={mobileNav.onOpen}
          />
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} meta={meta} />
    </>
  );
}

function Header({ meta }: Props) {
  const bg = useColorModeValue('white', 'gray.800');
  const ref = useRef<HTMLHeadingElement>();
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const themeType = useColorModeValue('dark', 'light');

  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s"
      pos="fixed"
      top="0"
      zIndex="1"
      left="0"
      right="0"
      bg={bg}
      borderTop="6px solid"
      borderTopColor={themeType === 'dark' ? 'yellow.500' : 'yellow.300'}
      width="full"
    >
      <chakra.div height="4.5rem" mx="auto">
        <HeaderContent meta={meta} />
      </chakra.div>
    </chakra.header>
  );
}

export default Header;
