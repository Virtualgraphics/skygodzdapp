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
  
  export default function ShopItem({ item, pickaxeContract }: Props) {
    const { data: claimCondition } = useActiveClaimCondition(
      pickaxeContract,
      item.metadata.id
    );
  
    return (
      <div >
        <ThirdwebNftMedia
          metadata={item.metadata}
      
          height={"64"}
        />
        <h3>{item.metadata.name}</h3>
        <p>
          Price:{" "}
          <b>
            {claimCondition && ethers.utils.formatUnits(claimCondition?.price)}{" "}
            GEM
          </b>
        </p>
  
        <div >
          <Web3Button
            colorMode="dark"
            contractAddress={ "0x00573597b00EEAE131Cc98766159EDb8Da2F2250"}
            action={(contract) => contract.erc1155.claim(item.metadata.id, 1)}
            onSuccess={() => alert("Purchased!")}
            onError={(error) => alert(error)}
          >
            Buy
          </Web3Button>
        </div>
      </div>
    );
  }