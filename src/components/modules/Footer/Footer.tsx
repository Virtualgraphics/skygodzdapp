import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {EndappLogo } from 'components/elements';

const Footer = () => {

return (
  <Box w="100%" bg="bg-accent" color="on-accent">
    <Container w="100%" as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack align="center">
        <EndappLogo />
          <ButtonGroup variant="ghost-on-accent" >
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" align='center' color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Virtual Graphics. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
)
  }

export default Footer;