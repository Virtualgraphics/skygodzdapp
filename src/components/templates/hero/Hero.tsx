import {
    Box,
    Button,
    Container,
    HStack,
    Heading,
    Img,
    Link,
    Stack,
    Text,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
   useColorModeValue as mode,
 } 
 
  from '@chakra-ui/react'
  import * as React from 'react'
  import { HiPlay } from 'react-icons/hi'
  import { FaArrowRight } from 'react-icons/fa'



  
  const Hero = () => {
    return (

      <Box as="section"  margin={0} pt="0" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }}  mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '520px' }}>
            <Text
              size="lg"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode('blue.600', 'blue.300')}
              letterSpacing="wide"
            >
              We Were Never Alone
            </Text>
            <Heading
              as="h1"
              size="md"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              SKY GODZ is an anime-style, scifi project with a decentralized NFT RPG game, an anime and a webtoon. 
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="xl" fontWeight="medium">
            The game is using cutting edge blockchain technology in combination with a story-driven, turn-based, multi-player RPG Metaverse, elements of DeFi and visual novels.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
              <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
               Get started
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.900"
                _hover={{ bg: 'gray.50' }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
              >
                Watch Demo
              </Button>
            </Stack>
            <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Find out how it works by checking our{' '}
              <Link href="#" textDecoration="underline">
                FAQ
              </Link>
            </Text>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
            <Img
            borderRadius={30}
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="https://www.virtual-graphics.ch/wp-content/uploads/2022/11/skygodz_imageMAIN.jpg"
              alt="Screening talent"
            />
            <Box
             borderRadius={30}
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>

     );

};

export default Hero;