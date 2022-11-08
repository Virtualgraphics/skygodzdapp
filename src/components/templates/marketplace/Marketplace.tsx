import { Container, Stack, Box, Image,Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';


const Marketplace = () => {

    return (
      <Box w="100%" > <Flex align="center" justify="center">
      <Heading
                    as="h1"
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                   Buy, trade and swap NFTs on the Marketplace.
                  </Heading>
                
                  
        </Flex>
        <Flex align="center" justify="center" mt="10" mb="20" >

        <Image src='https://www.virtual-graphics.ch/wp-content/uploads/2022/10/marketplaceImage.png'  alt= "Marketplace"/>
        </Flex>
      </Box>
    );
  };
  
  export default Marketplace;