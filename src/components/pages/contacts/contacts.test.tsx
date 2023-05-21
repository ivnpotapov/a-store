import { screen } from '@testing-library/react';

import { Contacts } from 'components/pages/contacts';
import { TEXT, TEST_ID } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

const { email, tel, address, wakingDaysLabel, wakingDays, lastDaysLabel, lastDays, acceptPayment } =
  TEXT.contacts;

describe('contacts', () => {
  test('render contacts', () => {
    withRouterAndRedux(<Contacts />);

    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(tel)).toBeInTheDocument();
    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(wakingDaysLabel)).toBeInTheDocument();
    expect(screen.getByText(wakingDays)).toBeInTheDocument();
    expect(screen.getByText(lastDaysLabel)).toBeInTheDocument();
    expect(screen.getByText(lastDays)).toBeInTheDocument();
    expect(screen.getByText(acceptPayment)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.contacts.map)).toBeInTheDocument();
  });
});
