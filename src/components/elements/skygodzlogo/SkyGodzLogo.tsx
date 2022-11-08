import { useColorMode } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

const SkyGodzLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? './skygodzLogoDark.svg' : './skygodzLogoLight.svg'}
      height={45}
      width={150}
      alt="Sky Godz"
    />
  );
};

export default SkyGodzLogo;
