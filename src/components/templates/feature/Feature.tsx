import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,

} from '@chakra-ui/react';
import {} from '@chakra-ui/react';

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

function gridListWithCTA() {
  return (
    <Box as={Container} maxW="5xl" mt={-10} mb={40} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700" color="blue.400">
               Choose your planet, connect your NFT and launch the Game...
            </chakra.h2>
            <Button colorScheme="blue" size="md">
              Launch Game
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.h2 fontSize="2xl" fontWeight="500">
            Go on Quests across the Universe, become a member of the Galactic Federation and earn valubale items and powers in this turn-based ascension RPG with NFT and DeFi 
elements. 
              </chakra.h2>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'Step 1'}
          text={'Mint a custom Alien NFT of your choosing or pick a free NFT'}
        />
        <Feature
          heading={'Step 2'}
          text={'Launch the Game and connect your Wallet'}
        />
        <Feature
          heading={'Step 3'}
          text={'Choose the planet that matches the Starsystem of your Alien NFT - You can later travel to other Starsystems'}
        />
        <Feature
          heading={'Step 4'}
          text={'Claim or mint additional LOTUS Tooken and Items by travelling through the Stargates'}
        />
      </Grid>
    </Box>
  );
}

export default gridListWithCTA;