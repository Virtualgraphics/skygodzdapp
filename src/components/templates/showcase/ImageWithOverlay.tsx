import {
    Box,
    BoxProps,
    Button,
    Heading,
    Image,
    LightMode,
    Skeleton,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import * as React from 'react'
  
  type ImageWithOverlayProps = BoxProps & {
    title: string
    description?: string
    url?: string
    alt?: string
    src: string
    spacing?: string
  }
  
  const ImageWithOverlay = (props: ImageWithOverlayProps) => {
    const {
      title,
      description,
      url,
      src,
      alt,
      spacing = '8',
      objectPosition = 'cover',
      ...rest
    } = props
  
    return (
      <Box borderRadius="xl" overflow="hidden" position="relative" width="full" {...rest}>
        <Image
          boxSize="full"
          maxHeight={{ base: '240px', md: '100%' }}
          src={src}
          alt={alt}
          objectFit="cover"
          objectPosition={objectPosition}
          fallback={<Skeleton />}
        />
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-t, blackAlpha.300 10%, blackAlpha.400)"
          px={{ base: '6', md: '5' }}
          py={{ base: '6', md: '5' }}
          boxSize="full"
        >
          <Stack spacing={spacing}>
            <Stack spacing="4">
              <Heading size="md" color="white">
                {title}
              </Heading>
              {description && (
                <Text fontSize="lg" color="white" maxW="2xs">
                  {description}
                </Text>
              )}</Stack>
            </Stack>
            
        </Box>
      </Box>
    )
  }

  export default ImageWithOverlay;