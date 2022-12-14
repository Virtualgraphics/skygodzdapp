
import { Container, VStack, Box, Button, ButtonGroup,Text, Stack, Spacer, Center, Flex, AspectRatio, Wrap, Heading, useColorModeValue, useColorMode, useColorModeValue as mode } from '@chakra-ui/react';
import { SgArcturus } from 'components/templates/games';
import { SgLyra } from 'components/templates/games';
import { SgCygnus } from 'components/templates/games';
import { SgSirius } from 'components/templates/games';
import Steps from '../steps/Steps';



const StargatePortal = () => {

return (

      <Box w="100%" m='auto' > 
      
     <Flex align="center" justify="center">
      <Heading
                    as="h1"
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                   STARGATE PORTAL GAME
                  </Heading>
                  </Flex>

                  <Flex w="100%"   align ='center' justify="center" pt='10'>
                  <Text textColor= 'blue.100, blue.800' fontSize='2xl'>
Bring your Alien to the Homeworld through a Stargate

                  </Text>

                  </Flex>

<Flex w="80%"   m='auto' alignItems='center'>

<SgArcturus/>
<SgCygnus/>
<SgSirius/>
<SgLyra/>

</Flex>

<Flex align="center" justify="center">
      <Heading
                    as="h2"
                    size="sm"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                  This is how it works:
                  </Heading>
                  </Flex>

<Flex w="60%"  m='auto'  justify="center" pt='5' pb='10'> 
                  <Text align="center"  textColor= 'blue.100, blue.800' fontSize='lg'>
Claim an Alien of your choice and click the play button to power up your Stargate with Cosmic Energy and earn LOTUS tokens.
Please check the list below for all the steps and make sure you hold an Stargazer NFT that corresponds with your Stargate, an Arcturian can only access the Acturus Stargate. Also make sure you have enough LOTUS in your wallet. You can alway claim more here.

                  </Text></Flex>

<VStack>
<Flex>
<Steps/>
</Flex>

</VStack>
  


        
 </Box>
    
    
);
};

  
  export default StargatePortal;