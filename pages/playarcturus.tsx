import { Box, Button, Flex, Container,Divider, Spinner, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';

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
  import {
    ARCTURIAN_ADDRESS,
    LOTUS_ADDRESS,
    ARCTURUS_STARGATE_ADDRESS,
    ENERGY_EDITION_ADDRESS,
  } from "../const/contractAddresses";
  
  
  export default function Play() {
    const address = useAddress();
  
    const { contract: miningContract } = useContract(ARCTURUS_STARGATE_ADDRESS);
    const { contract: characterContract } = useContract(
        ARCTURIAN_ADDRESS,
      "edition-drop"
    );
    const { contract: pickaxeContract } = useContract(
        ENERGY_EDITION_ADDRESS,
      "edition-drop"
    );
    const { contract: tokenContract } = useContract(LOTUS_ADDRESS, "token");
  
    if (!address) {
      return (
        <div >
          <ConnectWallet colorMode="dark" />
        </div>
      );
    }
  
    return (
      <div >
        {miningContract &&
        characterContract &&
        tokenContract &&
        pickaxeContract ? (
          <div >
            <CurrentEnergy
              miningContract={miningContract}
              characterContract={characterContract}
              pickaxeContract={pickaxeContract}
            />
            <Rewards
              miningContract={miningContract}
              tokenContract={tokenContract}
            />
          </div>
        ) : (
          <Spinner />
        )}
  
        <Divider orientation='horizontal' /> 
  
        {pickaxeContract && miningContract ? (
          <>
            <h2 >
              Your Owned Pickaxes
            </h2>
            <div
              style={{
                width: "100%",
                minHeight: "10rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <OwnedEnergy
                pickaxeContract={pickaxeContract}
                miningContract={miningContract}
              />
            </div>
          </>
        ) : (
            <Spinner />
        )}
  
  <Divider orientation='horizontal' />
  
        {pickaxeContract && tokenContract ? (
          <>
            <h2 >Shop</h2>
            <div
              style={{
                width: "100%",
                minHeight: "10rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Shop pickaxeContract={pickaxeContract} />
            </div>
          </>
        ) : (
            <Spinner />
        )}
      </div>
    );
  }