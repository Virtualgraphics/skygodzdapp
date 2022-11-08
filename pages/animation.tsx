import { Default } from 'components/layouts/Default';
import { Animation } from 'components/templates/animation';
import type { NextPage } from 'next';

const ANIMATION: NextPage = () => {
  return (
    <Default pageName="Animation">
      <Animation />
    </Default>
  );
};

export default ANIMATION;
