import { FC, useEffect } from 'react';
import { Container, Stack, Box, Text, Flex, Image, Heading, Icon, useColorModeValue as mode } from '@chakra-ui/react';

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Feature } from '../feature';



const Games = () => {
 
    return (
      <Box w="100%" >
      
      <Flex align="center" justify="center">

<Stack direction={{ base: 'row', md: 'row' }} spacing="4" mt="8" > 
<Heading
            as="h1"
            size="md"
            color={mode('blue.600', 'blue.300')}
            mt="0"
            mb="0"
            fontWeight="extrabold"
            letterSpacing="tight" >
           Enjoy the Games and earn tokens
          </Heading>
        </Stack>

        </Flex>  
        
        <Flex 

        align="center" justify="center" mt="10" mb="20">

        <Image src='https://www.virtual-graphics.ch/wp-content/uploads/2022/11/game_cover.png'  alt= "Game Cover"/>

        </Flex>

          <Flex >
           < Feature />
          </Flex>


          
       

      </Box>
    );
  };

  
  
  export default Games;