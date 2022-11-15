import { Box, Button, Flex, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";

const NFTMint= () => {
  const { contract: EditionDrop } = useContract("0xC6d1CddCD97AFF8997fc5130E7Ab28173fe6FcDE",  "edition-drop");
    const tokenId = 0;
    const [quantity, setQuantity] = useState<number>(1); // default to 1
  
   return (
    <Box w="100%" > <Flex align="center" justify="center">
      <Heading
                  
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                  
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                   Mint your NFT
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
            <Image borderRadius="20" src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/mint_arcturian.jpg" alt="Arcturian"/>
           
          </Stack>
        </Stack>
        <Stack spacing="6" align="center">
          <Text fontSize="xl" color="muted" >
            Available Mints
          </Text>
          
          <Stack spacing="4">
            
          <Web3Button
          contractAddress={"0xC6d1CddCD97AFF8997fc5130E7Ab28173fe6FcDE"}
          action={async (contract) =>
            await contract.erc1155.claim(tokenId, quantity)
          }
          onSuccess={(claimed) => alert("Claimed!")}
          onError={(error) => alert(error.message)}
        >
          Claim NFT
        </Web3Button>
          </Stack>
        </Stack>
        <Stack spacing="0.5" align="center">
          <Text fontSize="md" color="muted">
           You can mint up to 5 NFTs
          </Text>
          
        </Stack>
        
      </Stack>
    </Container>
  </Box>
        
        
      </Box>
  );
};

export default NFTMint;