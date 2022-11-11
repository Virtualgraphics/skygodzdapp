import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


import '@fontsource/inter/variable.css';




const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'false',
};




const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={proTheme}> 
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>    
          <Component {...pageProps} />
          </ThirdwebProvider> 
    </ChakraProvider>
  );
};

export default MyApp;