import { RootState } from '..';

export const burgerSelector = (state: RootState) => state.burger;

export const isModalOpenSelector = (state: RootState) => state.burger.isModalOpen;

export const isLogoShownSelector = (state: RootState) => state.burger.isLogoShown;

export const mainColorSelector = (state: RootState) => state.burger.primaryColor;

export const invertedColorSelector = (state: RootState) => state.burger.primaryInvertedColor;

export const secondaryColorSelector = (state: RootState) => state.burger.secondaryColor;

export const textColorSelector = (state: RootState) => state.burger.textColor;

export const linkTextColorSelector = (state: RootState) => state.burger.linkTextCollor;
