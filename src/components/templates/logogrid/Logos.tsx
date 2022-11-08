import { chakra, HTMLChakraProps, Image } from '@chakra-ui/react'
import * as React from 'react'

export const Logo1 = () => (
  <Image src='https://www.virtual-graphics.ch/wp-content/uploads/2022/11/polygon-matic-logo.svg'  alt= "Polygon"/>
)

export const Logo2 = () => (
  <Image src='https://www.virtual-graphics.ch/wp-content/uploads/2022/08/Filecoin.svg'  alt= "Filecoin"/>
)

export const Logo3 = (props: HTMLChakraProps<'svg'>) => (
  <Image src='https://www.virtual-graphics.ch/wp-content/uploads/2022/11/Moralis.svg'  alt= "Moralis"/>
)






