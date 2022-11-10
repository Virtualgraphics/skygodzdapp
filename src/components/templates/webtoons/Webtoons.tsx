import * as React from 'react'
import { Container, Stack, Box, Text, Flex, Heading, Slide, useColorModeValue as mode } from '@chakra-ui/react';
import { GalleryMain } from 'components/templates/gallery';
import { ContentGrid } from 'components/templates/contentgrid';
import { CheckBox } from 'components/templates/checkbox';

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useRef } from "react";
import { Carousel } from '../carousel';
import { ContentGrid01 } from '../contentgrid01';





const Webtoons = () => {

    return (
      
      <Box w="100%" > 
 <Flex align="center" justify="center">

        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8" > 
      <Heading
                    as="h1"
                    size="md"
                    color={mode('blue.600', 'blue.300')}
                    mt="0"
                    mb="10"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    
                  >
                   Read the Webtoons and earn tokens
                  </Heading>
                  

                  </Stack>
                  </Flex>
                  <Flex align="center" justify="center">

                 
<Carousel />


</Flex>

<Stack align="center" justify="center"> 
  <CheckBox/>


</Stack>

<Stack  alignItems='baseline' justify="center"> 
  <ContentGrid01/>


</Stack>

 </Box>
    );
  };
  
  
  



  
  
  export default Webtoons;