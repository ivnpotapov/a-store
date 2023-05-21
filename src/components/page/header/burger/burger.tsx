import { useCallback } from 'react';

import { Typography } from '@alfalab/core-components/typography';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';

import { TEXT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { burgerActions, isLogoShownSelector } from 'store/burger';

import cl from './burger.module.css';

const BURGER_WIDTH = '40px';
const BURGER_HEIGHT = '40px';

export const Burger = () => {
  const dispatch = useAppDispatch();
  const isLogoShown = useAppSelector(isLogoShownSelector);

  const handleModalOpen = useCallback(() => dispatch(burgerActions.handelModalOpen()), [dispatch]);

  return (
    <div onClick={handleModalOpen} className={cl.burger}>
      <BurgerMIcon width={BURGER_WIDTH} height={BURGER_HEIGHT} />
      {!isLogoShown && (
        <Typography.Text
          className={cl.burgerText}
          tag='span'
          view='primary-large'
          weight='regular'
          color='primary'
        >
          {TEXT.header.burger}
        </Typography.Text>
      )}
    </div>
  );
};
