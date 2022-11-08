import { Hero } from 'components/templates/hero';
import { Showcase } from 'components/templates/showcase';
import { LogoGrid } from 'components/templates/logogrid';


import * as React from 'react'
import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { FrontSlider } from '../frontslider';

  
  const Home = () => {
    return ( 
     
   

     <div >
 <FrontSlider />

      <Hero />
<Box w="100%" > <Flex align="center" justify="center">
<Heading
              as="h1"
              size="md"
              color={mode('blue.600', 'blue.300')}
              mt="0"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              CHECK OUT OUR PROJECTS BELOW:
            </Heading>
  </Flex>

      <Showcase />
      <LogoGrid />
      
      </Box>
     </div> 

)

};

export default Home;
