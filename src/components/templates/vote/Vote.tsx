import { Box, Button, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const Vote = () => (
  <Box as="section" maxW="60%" marginTop={20} marginBottom ={10}>
    <Container maxW="100%">
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '5', md: '6' }}
          justify="space-between"
        >
          <Stack spacing="1">
            <Text fontSize="lg" fontWeight="medium">
              Updates Available
            </Text>
            <Text fontSize="sm" color="muted">
              A new version is available. Please upgrade for the best experience.
            </Text>
          </Stack>
          <Box>
            <Button variant="primary">Vote now!</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default Vote;