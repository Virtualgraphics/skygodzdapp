import { Box, Container, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CheckboxCard, CheckboxCardGroup } from './CheckboxCardGroup'

const CheckBox = () => (
  <Box as="section" maxW="100%"  py={{ base: '4', md: '8' }}>
    <Container maxW="lg">
      <CheckboxCardGroup defaultValue={['one', 'two']} spacing="3">
        {['one', 'two', 'three'].map((option) => (
          <CheckboxCard key={option} value={option}>
            <Text color="emphasized" fontWeight="bold" fontSize="md">
              Option {option}
            </Text>
            <Text color="muted" fontSize="md">
              Jelly biscuit muffin icing dessert powder macaroon.
            </Text>
          </CheckboxCard>
        ))}
      </CheckboxCardGroup>
    </Container>
  </Box>
)

export default CheckBox;