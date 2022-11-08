import { Box, Stack, Image } from '@chakra-ui/react'
import * as React from 'react'
import  ImageWithOverlay  from './ImageWithOverlay'



const Showcase = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      height={{ md: '640px' }}
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: '6', md: '10' }}
      align="stretch"
    >
     <ImageWithOverlay
        flex="1"
        objectPosition="top center"
        title="COOL GAMES"
        description="Check out our fun games and earn tokens!"
        src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/sg_show640.jpg"
        alt="Lovely Image"
      />
      <Stack spacing={{ base: '6', md: '10' }} maxW={{ md: '400px' }}>
        <ImageWithOverlay
          spacing="4"
          title="WEBTOONS"
          src="https://www.virtual-graphics.ch/wp-content/uploads/2022/10/show400_02.jpg"
          alt="Lovely Image"
        />
        <ImageWithOverlay
          spacing="4"
          title="ANIME"
          src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/sg_show400.jpg"
          alt="Lovely Image"
        />
      </Stack>
    </Stack>
  </Box>
)

export default Showcase;