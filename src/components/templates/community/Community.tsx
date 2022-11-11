import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { Features } from 'components/templates/features';

const Community = () => {

    return (
      <Box   maxW="100%" > <Flex align="center" justify="center" mt='10' >
      <Heading
                    as="h1"
                    size="sm"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    mb='0'
                    fontWeight="bold"
                    letterSpacing="tight"
                  >
                   Contribute and be part of a great community
                  </Heading>
                  </Flex>
                  <Features />
      </Box>


     
    );
  };
  
  export default Community;