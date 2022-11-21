import { Box, Button, Flex, Container,Divider, Spinner, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';

import {
    ThirdwebNftMedia,
    useAddress,
    useOwnedNFTs,
    Web3Button,
  } from "@thirdweb-dev/react";
  import { EditionDrop, SmartContract } from "@thirdweb-dev/sdk";
  import React from "react";

  
  type Props = {
    pickaxeContract: EditionDrop;
    miningContract: SmartContract<any>;
  };
  
  /**
   * This component shows the:
   * - Pickaxes the connected wallet has
   * - A stake button underneath each of them to equip it
   */
  function OwnedEnergy({ pickaxeContract, miningContract }: Props) {
    const address = useAddress();
    const { data: ownedPickaxes, isLoading } = useOwnedNFTs(
      pickaxeContract,
      address
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    async function equip(id: string) {
      if (!address) return;
  
      // The contract requires approval to be able to transfer the pickaxe
      const hasApproval = await pickaxeContract.isApproved(
        address,
        "0xCa240A807df08AB8E9a340Fb6ce608Faa8DC2e49"
      );
  
      if (!hasApproval) {
        await pickaxeContract.setApprovalForAll("0xCa240A807df08AB8E9a340Fb6ce608Faa8DC2e49", true);
      }
  
      await miningContract.call("stake", id);
  
      // Refresh the page
      window.location.reload();
    }
  
    return (
      <>

      
        <Flex maxHeight={200}>
          {ownedPickaxes?.map((p) => (
            <Flex  key={p.metadata.id.toString()}>
              <ThirdwebNftMedia
                metadata={p.metadata}
                
                height={"40"}
              />
              <Text align="center" fontSize="lg" color="muted">{p.metadata.name}</Text>
  
              <Flex p='5'>
                <Web3Button
                  colorMode="dark"
                  contractAddress={"0xCa240A807df08AB8E9a340Fb6ce608Faa8DC2e49"}
                  action={() => equip(p.metadata.id)}
                >
                  Power Up
                </Web3Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </>
    );
  }
  
export default OwnedEnergy;
  