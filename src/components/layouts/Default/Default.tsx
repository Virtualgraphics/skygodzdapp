import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import { Footer, Header } from 'components/modules';

import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} `}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container maxW="100%" p={3} marginTop={0} as="main" minH="60vh">
      {children}
    </Container>
    <Footer />
  </>
);

export default Default;
