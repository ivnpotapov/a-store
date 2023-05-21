import React, { useCallback } from 'react';

import { Drawer } from '@alfalab/core-components/drawer';

import { BurgerMenu } from 'components/page/header/burgerMenu';
import { useAppDispatch, useAppSelector } from 'store';
import { burgerActions, isModalOpenSelector } from 'store/burger';

import cl from './ModalNav.module.css';

export const ModalNav = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(isModalOpenSelector);

  const handleModalOpen = useCallback(() => dispatch(burgerActions.handelModalOpen()), [dispatch]);

  return (
    <Drawer contentClassName={cl.drawer} open={isModalOpen} onClose={handleModalOpen}>
      <BurgerMenu />
    </Drawer>
  );
};
