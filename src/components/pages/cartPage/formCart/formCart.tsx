import { Badge } from '@alfalab/core-components/badge';
import { Button } from '@alfalab/core-components/button';
import { Plate } from '@alfalab/core-components/plate';
import { Typography } from '@alfalab/core-components/typography';
import { AlertCircleMIcon } from '@alfalab/icons-glyph/AlertCircleMIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

import { InputPhone } from 'components/pages/cartPage/formCart/inputPhone';
import { InputRadio } from 'components/pages/cartPage/formCart/inputRadio';
import { InputText } from 'components/pages/cartPage/formCart/inputText';
import { InputTextarea } from 'components/pages/cartPage/formCart/inputTextarea';
import { FORM_CART, TEXT } from 'constants/index';
import { CartFormInputs } from 'types';
import { schemaCart } from 'validationSchema';

import cl from './formCart.module.css';
import { InputCheckbox } from './inputCheckbox';
import { PromoCodeRightAddons } from './promoCodeRightAddons';

const { buttonSubmit } = TEXT.productCardPage;
const { radioList: deliveryRadioList } = FORM_CART.delivery;
const { radioList: paymentRadioList } = FORM_CART.payment;

export const FormCart = () => {
  const methodsCartForm = useForm<CartFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(schemaCart),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitted, isValid },
  } = methodsCartForm;

  const onSubmit: SubmitHandler<CartFormInputs> = (inputsData) => {
    console.log('inputsData', inputsData);
    reset();
  };

  const isInputsCorrect = isSubmitted && !isValid;

  return (
    <FormProvider {...methodsCartForm}>
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        <InputText
          inputName={FORM_CART.fullName.inputName}
          inputLabel={FORM_CART.fullName.inputLabel}
          placeholder={FORM_CART.fullName.placeholder}
        />

        <InputText
          inputName={FORM_CART.email.inputName}
          inputLabel={FORM_CART.email.inputLabel}
          placeholder={FORM_CART.email.placeholder}
        />

        <InputPhone
          inputName={FORM_CART.phone.inputName}
          inputLabel={FORM_CART.phone.inputLabel}
          placeholder={FORM_CART.phone.placeholder}
        />

        <InputText
          inputName={FORM_CART.address.inputName}
          inputLabel={FORM_CART.address.inputLabel}
          placeholder={FORM_CART.address.placeholder}
        />

        <InputRadio
          inputName={FORM_CART.delivery.inputName}
          inputLabel={FORM_CART.delivery.inputLabel}
          radioList={deliveryRadioList}
        />

        <InputText
          inputName={FORM_CART.promoCode.inputName}
          inputLabel={FORM_CART.promoCode.inputLabel}
          rightAddons={<PromoCodeRightAddons />}
        />

        <InputCheckbox
          inputName={FORM_CART.policy.inputName}
          inputLabel={FORM_CART.policy.checkboxLabel}
        />

        <InputTextarea
          inputName={FORM_CART.comment.inputName}
          inputLabel={FORM_CART.comment.inputLabel}
        />

        <Typography.Text>{FORM_CART.payment.subtitle}</Typography.Text>

        <InputRadio
          inputName={FORM_CART.payment.inputName}
          inputLabel={FORM_CART.payment.inputLabel}
          radioList={paymentRadioList}
        />

        {isInputsCorrect && (
          <Plate
            view='attention'
            title={FORM_CART.error.required}
            leftAddons={<Badge view='icon' iconColor='attention' content={<AlertCircleMIcon />} />}
          />
        )}

        <Button view='primary' type='submit' colors='inverted'>
          {buttonSubmit}
        </Button>
      </form>
    </FormProvider>
  );
};
