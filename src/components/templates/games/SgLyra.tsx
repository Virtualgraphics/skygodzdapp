import { Box, Button, Flex, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";

const SgLyra= () => {
  const { contract: EditionDrop } = useContract("0x798af1c4813E1b901086eA2f9097eE8039890B22",  "edition-drop");
    const tokenId = 0;
    const [quantity, setQuantity] = useState<number>(1); // default to 1
  
   return (
    <Box w="100%" > <Flex align="center" justify="center" p='0'></Flex>
        <Box py={{ base: '3', md: '12' }}>

    <Container
      maxW="xs"
      mb="0"
     
     
      py={{ base: '4', sm: '8' }}
      px={{ base: '4', sm: '10' }}
      bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
      boxShadow={{ base: 'none', sm: 'xl' }}
      borderRadius={{ base: 'none', sm: '2xl' }}
    >
      <Flex justify='center' pb='7'>
      
      <Text as='b' fontSize="xl" color="muted">
  LYRA STARGATE
  </Text></Flex>

      <Stack spacing="6">
        <Stack spacing="4" align="center">
         
          <Stack spacing="0" textAlign="center" >
            <Image boxSize='200' borderRadius="20" src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/lyra_stargate.jpg" alt="Lyra Stargate"/>
           
          </Stack>
        </Stack>
        <Stack spacing="6" align="center">
          <Text fontSize="sm" color="muted" >
          Only 1 Stargate per wallet.
          </Text>
          
          <Stack spacing="4">
            
          <Web3Button accentColor='lightblue'
          contractAddress={"0x798af1c4813E1b901086eA2f9097eE8039890B22"}
          action={async (contract) =>
            await contract.erc1155.claim(tokenId, quantity)
          }
          onSuccess={(claimed) => alert("Claimed!")}
          onError={(error) => alert(error.message)}
        >
          Claim Stargate
        </Web3Button>
          </Stack>
        </Stack>
        <Stack spacing="0.5" align="center">
          
          <Button colorScheme='blue' size='lg'>
    Power up Stargate
  </Button>
        </Stack>
        
      </Stack>
    </Container>
  </Box>
        
        
      </Box>
  );
};

export default SgLyra;