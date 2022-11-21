import { Box, Button, Flex, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import {
    ThirdwebNftMedia,
    useActiveClaimCondition,
    Web3Button,
  } from "@thirdweb-dev/react";
  import { EditionDrop, NFT } from "@thirdweb-dev/sdk";
  import { ethers } from "ethers";
  import React from "react";

  
  
  type Props = {
    pickaxeContract: EditionDrop;
    item: NFT;
  };
  
  function ShopItem({ item, pickaxeContract }: Props) {
    const { data: claimCondition } = useActiveClaimCondition(
      pickaxeContract,
      item.metadata.id
    );
  
    return (

<Container
      maxW="xs"
      mb="0"
    
      py={{ base: '4', sm: '8' }}
      px={{ base: '4', sm: '10' }}
      bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
      boxShadow={{ base: 'none', sm: 'xl' }}
      borderRadius={{ base: 'none', sm: '2xl' }}
    >

      <Stack spacing="6">
        <Stack spacing="4" align="center" borderRadius={20}>
     
        <ThirdwebNftMedia 
          metadata={item.metadata}
      
          height={"64"}
          />
        </Stack>
        
        <Text align="center"  >{item.metadata.name}</Text>
        <Text align="center" fontSize="sm" color="muted">
          Price:{" "}
          <b>
            {claimCondition && ethers.utils.formatUnits(claimCondition?.price)}{" "}
           LOTUS
          </b>
          </Text>
  
        <Box p='5'>
          <Web3Button
            colorMode="dark"
            
            contractAddress={ "0x00573597b00EEAE131Cc98766159EDb8Da2F2250"}
            action={(contract) => contract.erc1155.claim(item.metadata.id, 1)}
            onSuccess={() => alert("Purchased!")}
            onError={(error) => alert(error)}
          >
            Buy
          </Web3Button>
        </Box>
        </Stack>
 </Container>

    );
  }

  export default ShopItem;