import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container, Box, chakra } from '@chakra-ui/react';
import Header from 'components/Header';
import { siteConfig } from 'config';
import { PageTransition } from './PageTransition';
import { Footer } from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
  sidebar?: ReactNode;
};

export const Layout = ({ children, title = siteConfig.siteTitle, sidebar }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    <Container as="main" className="main-content" maxW="100wh">
      <Box display={{ base: 'block', md: 'flex' }}>
        {sidebar || null}

        <chakra.div flex={1}>
          <Box
            id="content"
            pt={3}
            px={5}
            mt="4.5rem"
            mx="auto"
            maxW="48rem"
            minH="76vh"
            w="100%"
            flex={1}
          >
            <PageTransition>{children}</PageTransition>
          </Box>
          <Footer />
        </chakra.div>
      </Box>
    </Container>
  </>
);
