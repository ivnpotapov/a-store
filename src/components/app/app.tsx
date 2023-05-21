import { Route, Routes, Navigate } from 'react-router-dom';

import 'assets/fonts/fonts.css';
import { Plug } from 'components/app/plug/plug';
import { Page } from 'components/page';
import { AlfaMade } from 'components/pages/alfaMade';
import { CartPage } from 'components/pages/cartPage';
import { Contacts } from 'components/pages/contacts';
import { CustomDesign } from 'components/pages/customDesign';
import { Home } from 'components/pages/home';
import { NotFoundPage } from 'components/pages/notFoundPage';
import { ProductCardPage } from 'components/pages/productCardPage';
import { ROUTES, TEXT } from 'constants/index';

import cl from './app.module.css';

const { index, alphaMade, customDesign, contact, cart, policy, productId, page404, any } = ROUTES;

const PAGES_TEXT = TEXT.pages;

export function App() {
  return (
    <div className={cl.app}>
      <Routes>
        <Route path={index} element={<Page />}>
          <Route index element={<Home />} />
          <Route path={alphaMade} element={<AlfaMade />} />
          <Route path={customDesign} element={<CustomDesign />} />
          <Route path={contact} element={<Contacts />} />
          <Route path={policy} element={<Plug text={PAGES_TEXT.policy} />} />
          <Route path={productId} element={<ProductCardPage />} />
          <Route path={page404} element={<NotFoundPage />} />
          <Route path={any} element={<Navigate to={page404} />} />
        </Route>
        <Route path={cart} element={<CartPage />} />
      </Routes>
    </div>
  );
}
