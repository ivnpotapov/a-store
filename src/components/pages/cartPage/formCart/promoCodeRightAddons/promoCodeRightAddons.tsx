import { Button } from '@alfalab/core-components/button';

import { FORM_CART } from 'constants/index';

export const PromoCodeRightAddons = () => {
  return (
    <Button view='primary' type='button' block={true}>
      {FORM_CART.promoCode.promoCodeText}
    </Button>
  );
};
