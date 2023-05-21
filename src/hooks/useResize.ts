import { useCallback, useLayoutEffect } from 'react';

import { BREAK_POINT_MOBILE } from 'constants/index';
import { useAppDispatch } from 'store';
import { burgerActions } from 'store/burger';

export const useResize = () => {
  const dispatch = useAppDispatch();

  const handelResize = useCallback(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > BREAK_POINT_MOBILE) {
      dispatch(burgerActions.setDesktopTheme());
    } else {
      dispatch(burgerActions.setMobileTheme());
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    handelResize();
    window.addEventListener('resize', handelResize);
    return () => window.removeEventListener('resize', handelResize);
  }, [handelResize]);
};
