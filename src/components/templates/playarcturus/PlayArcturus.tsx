import { Box, Button, Flex, Container,Divider, Spacer, Spinner, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import { Default } from 'components/layouts/Default';
import {
    ConnectWallet,
    useAddress,
    useContract,
    useMetamask,
  } from "@thirdweb-dev/react";
  import React from "react";
  import CurrentEnergy from "components/templates/games/CurrentEnergy";
  
  import OwnedEnergy from "components/templates/games/OwnedEnergy";
  import Rewards from "components/templates/games/Rewards";
  import Shop from "components/templates/games/Shop";
  import type { NextPage } from 'next';
  
  
function PlayArcturus() {

    const address = useAddress();
  
    const { contract: miningContract } = useContract( "0xCa240A807df08AB8E9a340Fb6ce608Faa8DC2e49");
    const { contract: characterContract } = useContract("0xC6d1CddCD97AFF8997fc5130E7Ab28173fe6FcDE", "edition-drop");
    const { contract: pickaxeContract } = useContract("0x00573597b00EEAE131Cc98766159EDb8Da2F2250","edition-drop");
    const { contract: tokenContract } = useContract("0xd23342d614a1ff1d7bc84b9041C8615532D55C6D", "token");
  
  
    return (

        <Container maxW='80%' m="auto" >
          <Flex align="center" justify="center">

      <Heading as="h1"size="md"color={mode('blue.600', 'blue.300')}mt="8"fontWeight="extrabold" letterSpacing="tight">
                   Power up the Arcturus Stargate</Heading>
                   </Flex>

      <Box m='auto'>
        
          <Box >
            <CurrentEnergy
              miningContract={miningContract}
              characterContract={characterContract}
              pickaxeContract={pickaxeContract}
            />
            <Rewards
              miningContract={miningContract}
              tokenContract={tokenContract}
            />
          </Box>
        
        <Divider orientation='horizontal' /> 
  
       
          <>
          <Flex align="center" justify="center">
            <Heading pt='10' pb='10' as="h1"size="md"color={mode('blue.600', 'blue.300')}mt="8"fontWeight="bold">
              Energy Sources you own
            </Heading>
            <Flex w="100%" minHeight="10rem" flexDirection="row"  alignItems="center" mt='10' >
              <OwnedEnergy
                pickaxeContract={pickaxeContract}
                miningContract={miningContract}
              />
            </Flex>
            </Flex>
          </>
        
  
  <Divider orientation='horizontal' />
  
  <Flex align="center" justify="center" >
            <Heading pt='10' pb='10' as="h1"size="md"color={mode('blue.600', 'blue.300')}mt="8"fontWeight="bold" >Shop</Heading>
            </Flex>
            <Flex m="auto" >
            

              <Shop pickaxeContract={pickaxeContract} />
            </Flex>
          
        
      </Box>

      </Container>
    );
  }

  export default PlayArcturus;