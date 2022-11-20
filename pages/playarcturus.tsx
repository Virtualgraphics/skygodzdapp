import { Default } from 'components/layouts/Default';
import { PlayArcturus } from 'components/templates/playarcturus';
import type { NextPage } from 'next';

const PLAYARCTURUS: NextPage = () => {
  return (
    <Default pageName="ARCTURUS STARGATE">
      <PlayArcturus />
    </Default>
  );
};

export default PLAYARCTURUS;
