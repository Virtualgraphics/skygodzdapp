import { Box, Button, Flex, Container, Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";


  const Token = () => {
    const { contract: tokenDropContract} = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D");
    const [amountToClaim, setAmountToClaim] = useState("");

    
    return (

<Box w="100%" > <Flex align="center" justify="center">
      <Heading
                  
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                  
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                  Claim LOTUS - SKY GODZ Token
                  </Heading>
                  </Flex>
        <Box py={{ base: '12', md: '12' }}>
    <Container
      maxW="md"
      mb="20"
      py={{ base: '0', sm: '8' }}
      px={{ base: '4', sm: '10' }}
      bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
      boxShadow={{ base: 'none', sm: 'xl' }}
      borderRadius={{ base: 'none', sm: '2xl' }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
         
          <Stack spacing="3" textAlign="center">
            <Image borderRadius="20" src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/token_lotus.jpg" alt="Lotus"/>
           
          </Stack>
        </Stack>
        <Text fontSize="xl" color="muted" align="center" >
           Claim your LOTUS Tokens below:
          </Text>
        <Stack spacing="6" align="center" maxWidth="md" >
<Flex  maxWidth="400">
        
        <Input id="2xl" size='md' 
    type="text"  
    placeholder="Enter amount to claim" 

   
    onChange={(e) => setAmountToClaim(e.target.value)}
    
    /></Flex>

          
          <Stack spacing="4">
            
          <Web3Button
          accentColor="lightblue"
          colorMode="dark"
          contractAddress="0xd23342d614a1ff1d7bc84b9041C8615532D55C6D"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
        
          Claim LOTUS
        </Web3Button>
          </Stack>
        </Stack>
        <Stack spacing="0.5" align="center">
          <Text fontSize="sm" color="muted">
           You can claim up to 1000 LOTUS Tokens
          </Text>
          
        </Stack>
        
      </Stack>
    </Container>
  </Box>
        
        
      </Box>
  );
};
  
  export default Token;