import { Outlet } from 'react-router-dom';

import { Cart } from 'components/cart';
import { CartSidePanel } from 'components/cart/cartSidePanel';
import { Footer } from 'components/page/footer';
import { Header } from 'components/page/header';
import { ModalNav } from 'components/page/modalNav';
import { NotificationWrap } from 'components/page/notification';
import { useResize } from 'hooks/useResize';

import cl from './page.module.css';

export const Page = () => {
  useResize();

  return (
    <>
      <Header />
      <main className={cl.main}>
        <Outlet />
      </main>

      <Cart />

      <Footer />

      <ModalNav />

      <CartSidePanel />

      <NotificationWrap />
    </>
  );
};
