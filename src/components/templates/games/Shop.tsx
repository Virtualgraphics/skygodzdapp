import { Box, Button, Flex, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { useNFTs } from "@thirdweb-dev/react";
import { EditionDrop } from "@thirdweb-dev/sdk";
import React from "react";

import ShopItem from "./ShopItem";

type Props = {
  pickaxeContract: EditionDrop;
};


function Shop ({ pickaxeContract }: Props) {
  const { data: availablePickaxes } = useNFTs(pickaxeContract);

  return (
    <>
      <Flex maxW='100%' direction="row" gap='14'>
        {availablePickaxes?.map((p) => (
          <ShopItem
            pickaxeContract={pickaxeContract}
            item={p}
            key={p.metadata.id.toString()}
          />
        ))}
      </Flex>
    </>
  );
}

export default Shop;