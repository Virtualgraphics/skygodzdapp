import { Default } from 'components/layouts/Default';
import { Community } from 'components/templates/community';
import type { NextPage } from 'next';

const COMMUNITY: NextPage = () => {
  return (
    <Default pageName="Community">
      <Community />
    </Default>
  );
};

export default COMMUNITY;
