import { TitleLink } from 'components/titleLink';
import { ROUTES, TEXT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { burgerActions, textColorSelector } from 'store/burger';

import cl from './modalNavLinks.module.css';

export const ModalNavLinks = () => {
  const dispatch = useAppDispatch();
  const textColor = useAppSelector(textColorSelector);

  const handleModalOpen = () => {
    dispatch(burgerActions.handelModalOpen());
  };

  return (
    <nav className={cl.nav}>
      <TitleLink
        to={ROUTES.alphaMade}
        text={TEXT.pages.alfaMade}
        textConfig={{ color: textColor }}
        onClick={handleModalOpen}
      />
      <TitleLink
        to={ROUTES.customDesign}
        text={TEXT.pages.customDesign}
        textConfig={{ color: textColor }}
        onClick={handleModalOpen}
      />
      <TitleLink
        to={ROUTES.contact}
        text={TEXT.pages.contact}
        textConfig={{ color: textColor }}
        onClick={handleModalOpen}
      />
    </nav>
  );
};
