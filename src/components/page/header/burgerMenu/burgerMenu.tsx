import { memo } from 'react';

import { Link } from '@alfalab/core-components/link';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { Link as LinkRouter } from 'react-router-dom';

import { ModalNavLinks } from 'components/page/header/burgerMenu/modalNavLinks';
import { SocialIcons } from 'components/page/header/burgerMenu/socialIcons';
import { Logo } from 'components/page/header/logo';
import { ROUTES, TEXT, TEST_ID } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import {
  burgerActions,
  isLogoShownSelector,
  linkTextColorSelector,
  mainColorSelector,
  textColorSelector,
} from 'store/burger';

import cl from './burgerMenu.module.css';

export const BurgerMenu = memo(() => {
  const dispatch = useAppDispatch();
  const handleModalOpen = () => {
    dispatch(burgerActions.handelModalOpen());
  };

  const isLogoShown = useAppSelector(isLogoShownSelector);
  const primaryColor = useAppSelector(mainColorSelector);
  const textColor = useAppSelector(textColorSelector);
  const linkTextColor = useAppSelector(linkTextColorSelector);

  return (
    <div className={cl.wrap}>
      <CrossMIcon
        fill={primaryColor}
        className={cl.iconClose}
        onClick={handleModalOpen}
        data-test-id={TEST_ID.header.closeIcon}
      />

      {isLogoShown && <Logo />}

      <ModalNavLinks />

      <Space align='start' size='m' direction='vertical'>
        <Typography.Text tag='span' view='secondary-large' weight='bold' color={textColor}>
          <Link
            onClick={handleModalOpen}
            Component={LinkRouter}
            colors={linkTextColor}
            href={ROUTES.policy}
            data-test-id={TEST_ID.burger.policyLink}
          >
            {TEXT.footer.policy}
          </Link>
        </Typography.Text>

        <SocialIcons />
      </Space>
    </div>
  );
});
