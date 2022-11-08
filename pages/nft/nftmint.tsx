import { Default } from 'components/layouts/Default';
import { NFTMint } from 'components/templates/NFT/NFTMint';
import type { NextPage } from 'next';

const NFTMINT: NextPage = () => {
  return (
    <Default pageName="NFT Mint">
      <NFTMint />
    </Default>
  );
};

export default NFTMINT