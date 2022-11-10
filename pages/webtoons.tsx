import { Default } from 'components/layouts/Default';
import { Webtoons } from 'components/templates/webtoons';
import type { NextPage } from 'next';

const WEBTOONS: NextPage = () => {
  return (
    <Default pageName="WEBTOONS">
      <Webtoons />
    </Default>
  );
};

export default WEBTOONS;