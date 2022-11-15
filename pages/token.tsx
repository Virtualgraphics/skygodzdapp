import { Default } from 'components/layouts/Default';
import { Token } from 'components/templates/token';
import type { NextPage } from 'next';

const TOKEN: NextPage = () => {
  return (
    <Default pageName="LOTUS Token">
      <Token />
    </Default>
  );
};

export default TOKEN