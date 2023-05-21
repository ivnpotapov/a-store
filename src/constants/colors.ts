import { TitleProps } from '@alfalab/core-components/typography';

type AlfaLabColors = { [key: string]: TitleProps['color'] };

export const COLORS_ALFALAB: AlfaLabColors = {
  accent: 'accent',
  primary: 'primary',
  primaryInverted: 'primary-inverted',
  secondary: 'secondary',
  secondaryInverted: 'secondary-inverted',
};

export const COLORS = {
  primary: 'var(--color-light-text-primary)',
  primaryInverted: 'var(--color-light-text-primary-inverted)',
  secondary: 'var(--color-light-text-secondary)',
  secondaryInverted: 'var(--color-light-text-secondary-inverted)',
  tertiary: 'var(--color-light-text-tertiary)',
  accent: 'var(--color-light-text-accent)',
} as const;

export type ValueOfColors = (typeof COLORS)[keyof typeof COLORS];

export const colorMapEnRu = {
  white: 'белый',
  black: 'черный',
  red: 'красный',
  green: 'зеленый',
  gray: 'серый',
};
