import { Box, Button, Flex, Spacer, Grid, GridItem, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import {MediaRenderer, useContract, useContractMetadata, Web3Button} from "@thirdweb-dev/react";
import { EditionDrop, Erc1155 } from '@thirdweb-dev/sdk';
import { BigNumber } from "ethers";
import { useState } from "react";
import { Arcturian } from 'components/templates/NFT/arcturian';
import { Felines } from 'components/templates/NFT/felines';
import { Lightwarrior } from 'components/templates/NFT/lightwarrior';
import { Sirian } from 'components/templates/NFT/sirian';

const NFTMint= () => {
  const { contract: EditionDrop } = useContract("0xC6d1CddCD97AFF8997fc5130E7Ab28173fe6FcDE",  "edition-drop");
    const tokenId = 0;
    const [quantity, setQuantity] = useState<number>(1); // default to 1
  
   return (

        <Box  maxWidth='70%' m='auto' >
          <Flex align="center" justify="center">
      <Heading
                    as="h1"
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="bold"
                    letterSpacing="tight"
                  >
                   SKY GODZ STARGAZER NFTS
                  </Heading>
                  </Flex>

<Flex align="center" justify="center"  minWidth='max-content' alignItems='center' gap='5'>

<Arcturian/>

<Felines/>
</Flex>

<Flex align="center" justify="center"  minWidth='max-content' alignItems='center' gap='10'>
<Lightwarrior/>

<Sirian/>
  
</Flex>

  </Box>
        
        
    
  );
};

export default NFTMint;