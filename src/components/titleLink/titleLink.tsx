import { Typography, TitleProps } from '@alfalab/core-components/typography';
import { NavLink } from 'react-router-dom';

import { COLORS_ALFALAB, ROUTES, ValueOfRoutes } from 'constants/index';
import { useAppSelector } from 'store';
import { secondaryColorSelector } from 'store/burger';

import cl from './titleLink.module.css';

type Props = {
  to: ValueOfRoutes;
  text: string;
  addLinkClassName?: string;
  addTextClassName?: string;
  dataTestId?: string;
  textConfig?: Partial<TitleProps>;
  onClick?: () => void;
};

export const TitleLink = ({
  to,
  text,
  addLinkClassName,
  addTextClassName,
  textConfig,
  onClick,
  dataTestId,
}: Props) => {
  const secondaryColor = useAppSelector(secondaryColorSelector);

  const checkAddLink = addLinkClassName ? addLinkClassName : '';
  const clLink = [cl.link, checkAddLink].join(' ');

  const checkAddText = addTextClassName ? addTextClassName : '';
  const clText = [checkAddText].join(' ');

  const isHome = to === ROUTES.index;

  return (
    <Typography.Title
      className={clText}
      tag='div'
      color={COLORS_ALFALAB.primary}
      view='medium'
      weight='bold'
      {...(textConfig ? textConfig : {})}
    >
      <NavLink
        to={to}
        className={clLink}
        onClick={onClick}
        style={({ isActive }) => (isActive && !isHome ? { color: secondaryColor } : undefined)}
        data-test-id={dataTestId}
      >
        {text}
      </NavLink>
    </Typography.Title>
  );
};
