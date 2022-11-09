import { Box, Container, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { ColorModeButton, SkyGodzLogo, NavBar } from 'components/elements';

import { ConnectButton } from '../ConnectButton';
  
  const Header = () => {
    return (
      <Box borderBottom="1px" borderBottomColor="chakra-border-color" >
        <Container>
          <Flex align="center" justify="space-between" pt='6' pb='6'>
            <SkyGodzLogo />
           < NavBar />
            <HStack gap={'10px'}>
              <ConnectButton />
              <ColorModeButton />
            </HStack>
          </Flex>
        </Container>
      </Box>
    ); 
  };

  export default Header;