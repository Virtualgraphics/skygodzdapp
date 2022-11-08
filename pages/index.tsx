import { Default } from 'components/layouts/Default';
import { Home } from 'components/templates/home';
import type { NextPage } from 'next';
import {
  Box
 
} from '@chakra-ui/react'

const HomePage: NextPage = () => {
  return (
  
    
    <Default pageName="Home">
    <Home />
    </Default>
  



  );
};


export default HomePage;
