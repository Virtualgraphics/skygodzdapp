import { Default } from 'components/layouts/Default';
import { NFTBalances } from 'components/templates/NFT/NFTBalances';
import type { NextPage } from 'next';

const NFTBALANCE: NextPage = () => {
  return (
    <Default pageName="NFT Balance">
      <NFTBalances />
    </Default>
  );
};

export default NFTBALANCE