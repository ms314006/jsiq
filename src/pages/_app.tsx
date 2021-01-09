import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import theme from 'theme';
import 'styles/globals.css';

import SEO from '../config/next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider colorModeManager={localStorageManager} theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
