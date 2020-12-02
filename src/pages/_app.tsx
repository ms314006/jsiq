import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from 'theme';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
