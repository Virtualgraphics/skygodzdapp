import { Default } from 'components/layouts/Default';
import { StargatePortal } from 'components/templates/games';
import type { NextPage } from 'next';

const STARGATEPORTAL: NextPage = () => {
  return (
    <Default pageName="STARGATE PORTAL">
      <StargatePortal />
    </Default>
  );
};

export default STARGATEPORTAL;
