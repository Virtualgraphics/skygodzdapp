import { Default } from 'components/layouts/Default';
import { Games } from 'components/templates/games';
import type { NextPage } from 'next';

const GAMES: NextPage = () => {
  return (
    <Default pageName="GAMES">
      <Games />
    </Default>
  );
};

export default GAMES;