import madeImg from 'assets/img/made-bg.jpeg';
import yourImg from 'assets/img/your-design-bg.jpeg';
import { PictureLink } from 'components/pages/home/pictureLink';
import { ROUTES, TEXT, TEST_ID } from 'constants/index';

import cl from './home.module.css';

export const Home = () => {
  return (
    <div className={cl.wrap}>
      <PictureLink
        to={ROUTES.alphaMade}
        src={madeImg}
        text={TEXT.pages.alfaMade}
        testId={TEST_ID.home.alfaMadeLink}
      />
      <PictureLink
        to={ROUTES.customDesign}
        src={yourImg}
        text={TEXT.pages.customDesign}
        testId={TEST_ID.home.yourDesignLink}
      />
    </div>
  );
};
