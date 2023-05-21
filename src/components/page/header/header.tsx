import { Burger } from 'components/page/header/burger';
import { Logo } from 'components/page/header/logo';

import cl from './header.module.css';

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.wrap}>
        <Logo />

        <Burger />
      </div>
    </header>
  );
};
