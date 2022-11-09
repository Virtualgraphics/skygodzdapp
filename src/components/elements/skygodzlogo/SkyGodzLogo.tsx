import { useColorMode } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

const SkyGodzLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? 'https://www.virtual-graphics.ch/wp-content/uploads/2022/11/skygodzLogoDARK.svg' : 'https://www.virtual-graphics.ch/wp-content/uploads/2022/11/skygodzlogoLIGHT.svg'}
      height={55}
      width={220}
      alt="Sky Godz"
    />
  );
};

export default SkyGodzLogo;
