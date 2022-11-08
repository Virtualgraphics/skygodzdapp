import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';


const NFTBalances= () => {
  

  return (
  
    <Box   maxW="100%" > <Flex align="center" justify="center">
    <Heading
                  as="h1"
                  size="md"
                  color={mode('blue.600', 'blue.300')}
                  mt="8"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                >
                Your NFT Balance
                </Heading>
                </Flex>
                <Flex align="center" justify="center"  mt="200">
                <h1
                  
                  
                  color={mode('blue.600', 'blue.300')}
                
            
                >
                 You have no NFTs in your wallet.
                </h1>
                
                </Flex>
    </Box>

  );
};

export default NFTBalances;
