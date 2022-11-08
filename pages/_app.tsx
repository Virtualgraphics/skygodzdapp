import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme'
import  myNewTheme from '../styles/theme';
import type { AppProps } from 'next/app';


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'false',
};

const theme = extendTheme({ config });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={proTheme}>     
          <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;