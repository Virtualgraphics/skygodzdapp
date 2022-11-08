import { Box, HStack, Image, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';


const NFTCard = () => {
  const bgColor = useColorModeValue('none', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const descBgColor = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box bgColor={bgColor} padding={3} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>

      


    </Box>
  );
};

export default NFTCard;
