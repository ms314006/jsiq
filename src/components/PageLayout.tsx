import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container, Box, chakra } from '@chakra-ui/react';
import Header from 'components/Header';
import { siteConfig } from 'config';
import { PageTransition } from './PageTransition';
import { FrontMatter, PageMeta } from 'utils/getQuestions';

type Props = {
  children?: ReactNode;
  title?: string;
  sidebar?: ReactNode;
  pageNav?: ReactNode;
  footer?: ReactNode;
  frontMatter?: FrontMatter;
  pagesMeta?: PageMeta[];
};

export const PageLayout = ({
  children,
  title = siteConfig.siteTitle,
  sidebar,
  pageNav,
  footer,
  frontMatter,
  pagesMeta,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header meta={pagesMeta} />

    <chakra.div
      as="main"
      className="main-content"
      maxW="100wh"
      display={{ base: 'block', md: 'flex' }}
    >
      {sidebar || null}

      <chakra.div pr={{ md: 4, xl: sidebar ? 256 : 4 }} w="100%">
        <Container id="content" pt={3} px={5} mt="4.5rem" mx="auto" maxW="48rem" minH="90vh">
          <PageTransition id={frontMatter?.slug || ''}>{children}</PageTransition>
          {pageNav || null}
          {footer || null}
        </Container>
      </chakra.div>
    </chakra.div>
  </>
);
