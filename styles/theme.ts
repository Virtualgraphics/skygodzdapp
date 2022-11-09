import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react'

const customTheme = extendTheme(
  {

    body: {
      bg: 'gray.400',
      color: 'white',
    },
    colors: {
      brand: baseTheme.colors.red,
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: 'blue',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
)

export default customTheme;