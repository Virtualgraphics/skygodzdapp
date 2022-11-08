import { useColorMode } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

const EndappLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? 'https://www.virtual-graphics.ch/wp-content/uploads/2022/10/enDAPPDarkBG.svg' : 'https://www.virtual-graphics.ch/wp-content/uploads/2022/10/enDAPPLightBG.svg'}
      height={45}
      width={150}
      alt="enDAPP"
    />
  );
};

export default EndappLogo;
