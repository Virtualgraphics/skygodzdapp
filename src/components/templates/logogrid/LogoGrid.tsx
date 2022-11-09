import { Box, Center, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import * as logos from './Logos'

const LogoGrid = () => (
  <Box >
    <Container py={{ base: '4', md: '8' }}>
      <Box
        bg="bg-accent"
        py={{ base: '12', md: '16' }}
        px={{ base: '6', md: '16' }}
        borderRadius="lg"
      >
        <Stack spacing="8">
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" textAlign="center">
            These and other companies trust us
          </Text>
          <SimpleGrid gap={{ base: '4', md: '8' }} columns={{ base: 2, md: 3, lg: 5 }}>
            {Object.entries(logos).map(([name, Logo]) => (
              <Center key={name}>
                <Logo h={{ base: '8', md: '10' }} maxW="10rem" />
              </Center>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default LogoGrid;