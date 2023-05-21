import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormCart } from 'components/pages/cartPage/formCart';
import { FORM_CART, TEST_ID, TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

const REQUIRED_LENGTH = 5;
const FULL_NAME_TEXT = 'name';
const ADDRESS_TEXT = 'address';
const COMMENT_TEXT = 'comment';
const PROMO_CODE_TEXT = 'promoCode';
const { buttonSubmit } = TEXT.productCardPage;

describe('formCart', () => {
  test('render fullName', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.fullName.inputLabel)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(FORM_CART.fullName.placeholder)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH);

    await userEvent.type(
      screen.getByPlaceholderText(FORM_CART.fullName.placeholder),
      FULL_NAME_TEXT
    );

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH - 1);

    expect(screen.getByDisplayValue(FULL_NAME_TEXT)).toBeInTheDocument();
  });

  test('render email', async () => {
    const INVALID = 'mail@mail';
    const ADDITIONAL = '.ru';
    const VALID = 'mail@mail.ru';

    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.email.inputLabel)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(FORM_CART.email.placeholder)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH);

    await userEvent.type(screen.getByPlaceholderText(FORM_CART.email.placeholder), INVALID);

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH - 1);
    expect(await screen.findByText(FORM_CART.error.email)).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText(FORM_CART.email.placeholder), ADDITIONAL);

    expect(screen.getByDisplayValue(VALID)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect(screen.queryByText(FORM_CART.error.email)).toBeNull();
  });

  test('render phone', async () => {
    const INVALID = '999999999';
    const ADDITIONAL = '9';
    const VALID = '+7 999 999-99-99';

    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.phone.inputLabel)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(FORM_CART.phone.placeholder)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH);

    await userEvent.type(screen.getByPlaceholderText(FORM_CART.phone.placeholder), INVALID);

    expect(screen.getByDisplayValue('+7 999 999-99-9')).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH - 1);
    expect(await screen.findByText(FORM_CART.error.phone)).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText(FORM_CART.phone.placeholder), ADDITIONAL);

    expect(screen.getByDisplayValue(VALID)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect(screen.queryByText(FORM_CART.error.phone)).toBeNull();
  });

  test('render address', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.address.inputLabel)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(FORM_CART.address.placeholder)).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText(FORM_CART.address.placeholder), ADDRESS_TEXT);

    expect(screen.getByDisplayValue(ADDRESS_TEXT)).toBeInTheDocument();
  });

  test('render delivery', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.delivery.inputLabel)).toBeInTheDocument();
    expect(screen.getByText(FORM_CART.delivery.radioList[0].label)).toBeInTheDocument();
    expect(screen.getByText(FORM_CART.delivery.radioList[1].label)).toBeInTheDocument();
    expect(screen.getByText(FORM_CART.delivery.radioList[2].label)).toBeInTheDocument();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.delivery.radioList[0].label,
      }) as HTMLInputElement
    ).not.toBeChecked();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.delivery.radioList[1].label,
      }) as HTMLInputElement
    ).not.toBeChecked();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.delivery.radioList[1].label,
      }) as HTMLInputElement
    ).not.toBeChecked();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH);

    await userEvent.click(screen.getByText(FORM_CART.delivery.radioList[1].label));

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH - 1);

    expect(screen.getByDisplayValue(FORM_CART.delivery.radioList[2].value)).toBeInTheDocument();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.delivery.radioList[1].label,
      }) as HTMLInputElement
    ).toBeChecked();
  });

  test('render promoCode', async () => {
    withRouterAndRedux(<FormCart />);

    expect(
      screen.getByRole('textbox', { name: FORM_CART.promoCode.inputLabel })
    ).toBeInTheDocument();
    expect(screen.queryByText(FORM_CART.promoCode.promoCodeText)).toBeNull();

    await userEvent.type(
      screen.getByRole('textbox', { name: FORM_CART.promoCode.inputLabel }),
      PROMO_CODE_TEXT
    );

    expect(screen.getByText(FORM_CART.promoCode.promoCodeText)).toBeInTheDocument();
    expect(screen.getByDisplayValue(PROMO_CODE_TEXT)).toBeInTheDocument();
  });

  test('render policy', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.policy.checkboxLabel)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect(await screen.findByText(FORM_CART.error.policy)).toBeInTheDocument();

    await userEvent.click(screen.getByText(FORM_CART.policy.checkboxLabel));
    await userEvent.click(screen.getByText(buttonSubmit));

    expect(screen.queryByText(FORM_CART.error.policy)).toBeNull();
  });

  test('render comment', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.comment.inputLabel)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId(TEST_ID.cart.formTextarea), COMMENT_TEXT);

    expect(screen.getByDisplayValue(COMMENT_TEXT)).toBeInTheDocument();
  });

  test('render payment', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(FORM_CART.payment.inputLabel)).toBeInTheDocument();
    expect(screen.getByText(FORM_CART.payment.radioList[0].label)).toBeInTheDocument();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.payment.radioList[0].label,
      }) as HTMLInputElement
    ).toBeChecked();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.payment.radioList[1].label,
      }) as HTMLInputElement
    ).not.toBeChecked();

    await userEvent.click(
      screen.getByRole('radio', {
        name: FORM_CART.payment.radioList[1].label,
      })
    );

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.payment.radioList[0].label,
      }) as HTMLInputElement
    ).not.toBeChecked();

    expect(
      screen.getByRole('radio', {
        name: FORM_CART.payment.radioList[1].label,
      }) as HTMLInputElement
    ).toBeChecked();
  });

  test('render error required', async () => {
    withRouterAndRedux(<FormCart />);

    expect(screen.getByText(TEXT.productCardPage.buttonSubmit)).toBeInTheDocument();

    await userEvent.click(screen.getByText(buttonSubmit));

    expect((await screen.findAllByText(FORM_CART.error.required)).length).toBe(REQUIRED_LENGTH);
  });
});
