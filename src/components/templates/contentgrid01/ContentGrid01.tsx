import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { posts } from './data01'
  
  const ContentGrid01 = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Box >
        <Container maxW="70%" marginTop={0} marginBottom ={10}>
          <Stack spacing={{ base: '12', md: '16' }}>
            <Stack direction="row" justify="space-between">
              <Stack spacing={{ base: '4', md: '5' }}>
                <Stack spacing="3">
                  
                  
                </Stack>
                
              </Stack>
              
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '12', lg: '8' }}>
              {posts.map((post) => (
                <Link key={post.id} _hover={{ textDecor: 'none' }} role="group">
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        transition="all 0.2s"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                    </Box>
                    <Stack spacing="3">
                     
                      <Heading size="xs">{post.title}</Heading>
                      <Text color="muted">{post.excerpt}</Text>
                    </Stack>
                    
                  </Stack>
                </Link>
              ))}
            </SimpleGrid>
            {isMobile && (
              <Button variant="primary" size="lg">
                Show all
              </Button>
            )}
          </Stack>
        </Container>
      </Box>
    )
  }

  export default ContentGrid01;