import {} from '@chakra-ui/react';
import { Container, Stack, Box, Text, Spacer, Center, Flex, AspectRatio, Wrap, Heading, useColorModeValue, useColorMode, useColorModeValue as mode } from '@chakra-ui/react';
import { SgArcturus } from 'components/templates/games';
import { SgLyra } from 'components/templates/games';
import { SgCygnus } from 'components/templates/games';
import { SgSirius } from 'components/templates/games';



const StargatePortal = () => {

return (

      <Box w="100%" m='auto'  > 
      
     <Flex align="center" justify="center">
      <Heading
                    as="h1"
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                   STARGATE PORTAL
                  </Heading>
                  </Flex>

                  <Flex w="70%"   m='auto' p='0' alignItems='center' >

<SgArcturus/>


<SgCygnus/>

<SgSirius/>

<SgLyra/>
  
</Flex>
                





        
 </Box>
    
    
);
};

  
  export default StargatePortal;