import { FC, useEffect } from 'react';
import { Container, Stack, Box, Text, Flex, Heading, Icon, useColorModeValue as mode } from '@chakra-ui/react';

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Feature } from 'components/templates/feature';


const Games = () => {
 
    return (
      <Box w="100%" >
      
       <Flex>

       <Feature />
       </Flex>
      </Box>
    );
  };

  
  
  export default Games;