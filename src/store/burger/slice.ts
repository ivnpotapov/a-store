import { LinkProps } from '@alfalab/core-components/link';
import { TitleProps } from '@alfalab/core-components/typography';
import { CaseReducer, createSlice } from '@reduxjs/toolkit';

import { COLORS, COLORS_ALFALAB, ValueOfColors } from 'constants/index';

type BurgerType = {
  isModalOpen: boolean;
  isLogoShown: boolean;
  primaryColor: ValueOfColors;
  primaryInvertedColor: ValueOfColors;
  secondaryColor: ValueOfColors;
  textColor: TitleProps['color'];
  linkTextCollor: LinkProps['colors'];
};

export const burgerInitialState: BurgerType = {
  isModalOpen: false,
  isLogoShown: true,
  primaryColor: COLORS.primary,
  primaryInvertedColor: COLORS.primaryInverted,
  secondaryColor: COLORS.secondary,
  textColor: COLORS_ALFALAB.primary,
  linkTextCollor: 'default',
};

const NAME = 'burger';

const handelModalOpen: CaseReducer<BurgerType> = (state) => {
  state.isModalOpen = !state.isModalOpen;
};

const setMobileTheme: CaseReducer<BurgerType> = (state) => {
  state.isLogoShown = true;
  state.primaryColor = COLORS.primary;
  state.primaryInvertedColor = COLORS.primaryInverted;
  state.textColor = COLORS_ALFALAB.primary;
  state.secondaryColor = COLORS.secondary;
  state.linkTextCollor = 'default';
};

const setDesktopTheme: CaseReducer<BurgerType> = (state) => {
  state.isLogoShown = false;
  state.primaryColor = COLORS.primaryInverted;
  state.primaryInvertedColor = COLORS.primary;
  state.secondaryColor = COLORS.secondaryInverted;
  state.textColor = COLORS_ALFALAB.primaryInverted;
  state.linkTextCollor = 'inverted';
};

export const { actions: burgerActions, reducer: burgerReducer } = createSlice({
  name: NAME,
  initialState: burgerInitialState,
  reducers: {
    handelModalOpen,
    setMobileTheme,
    setDesktopTheme,
  },
});
