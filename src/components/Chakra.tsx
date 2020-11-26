import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
import theme from 'theme';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  return (
    <ChakraProvider colorModeManager={cookieStorageManager(cookies)} theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  );
};

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
