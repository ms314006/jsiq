import { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import Header from 'components/Header';
import { siteConfig } from 'config';
import { PageTransition } from './PageTransition';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children, title = siteConfig.siteTitle }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <Header />

      <PageTransition>{children}</PageTransition>
    </Container>
  </div>
);
