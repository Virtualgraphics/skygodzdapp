import { Box, Button, Flex, Container,Divider, Heading, Input, Stack, Text, Image, useBreakpointValue, useColorModeValue as mode } from '@chakra-ui/react';
import React from "react";
import {
  ThirdwebNftMedia,
  useAddress,
  useContractRead,
  useMetadata,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { SmartContract, Token } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

type Props = {
  miningContract: SmartContract<any>;
  tokenContract: Token;
};

/**
 * This component shows the:
 * - Metadata of the token itself (mainly care about image)
 * - The amount this wallet holds of this wallet
 * - The amount this user can claim from the mining contract
 */
function Rewards({ miningContract, tokenContract }: Props) {
  const address = useAddress();

  const { data: tokenMetadata } = useMetadata(tokenContract);
  const { data: currentBalance } = useTokenBalance(tokenContract, address);
  const { data: unclaimedAmount } = useContractRead(
    miningContract,
    "calculateRewards",
    address
  );

  return (
    <div
      
    >
      <p>
        Your <b>Lotus Tokens</b>
      </p>

      {tokenMetadata && (
        <ThirdwebNftMedia
          // @ts-ignore
          metadata={tokenMetadata}
          height={"48"}
        />
      )}
      <p >
        Balance: <b>{currentBalance?.displayValue}</b>
      </p>
      <p>
        Unclaimed:{" "}
        <b>{unclaimedAmount && ethers.utils.formatUnits(unclaimedAmount)}</b>
      </p>


      <div >
        <Web3Button
          contractAddress={"0xCa240A807df08AB8E9a340Fb6ce608Faa8DC2e49"}
          action={(contract) => contract.call("claim")}
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
}

export default Rewards;