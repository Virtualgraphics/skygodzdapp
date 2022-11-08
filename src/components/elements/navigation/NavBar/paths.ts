import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'GAMES',
    href: '/games',
  },
  {
    label: 'ANIMATION',
    href: '/animation',
    
  },
  {
    label: 'WEBTOONS',
    href: '/webtoons',
    
  },
  {
    label: 'NFT',
    href: '/nft',
    children: [
      {
        label: 'MINT NFT',
        subLabel: 'Mint an NFT',
        href: '/nft/nftmint',
        
      },
      {
        label: 'YOUR NFTS',
        subLabel: 'See your NFT Collection',
        href: '/nft/nftbalances',
       
      },
    ],
    
  },


  {
    label: 'COMMUNITY',
    href: '/community',
    
  },

];

export default NAV_LINKS;
