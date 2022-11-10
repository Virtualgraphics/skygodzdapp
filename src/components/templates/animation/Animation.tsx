import {} from '@chakra-ui/react';
import { Container, Stack, Box, Text, Center, Flex, AspectRatio, Wrap, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { ContentGrid } from 'components/templates/contentgrid';
import { Vote } from 'components/templates/vote';
import { CheckBox } from 'components/templates/checkbox';
import ReactPlayer from 'react-player';

const Animation = () => {

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
                   Watch our shows and participate in the stories
                  </Heading>
                  </Flex>
                


<Flex align="center" justify="center" marginTop={10}>
  <Flex
align="center" 
as='video'
controls

src='https://www.skygodz.com/images/skygodz_teaser_2022.mp4'
poster='https://www.virtual-graphics.ch/wp-content/uploads/2022/11/teaser_thumb.jpg'

objectFit='contain'
sx={{
  aspectRatio: '16/9'
}}/>
</Flex>

<Flex align="center" justify="center">
        <CheckBox/>
        
        </Flex>

<Flex align="center" justify="center">
        <ContentGrid/>
        
        </Flex>
        
 </Box>
    
    
);
};

  
  export default Animation;