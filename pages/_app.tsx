import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import type { AppProps } from 'next/app';


import '@fontsource/inter/variable.css';




const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'false',
};



const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={proTheme}>     
          <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;