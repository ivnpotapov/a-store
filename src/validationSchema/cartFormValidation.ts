import * as yup from 'yup';

import { FORM_CART } from 'constants/index';
import { regExps } from 'validationSchema/regExps';

const { max, required, phone, email, policy } = FORM_CART.error;

const MAX_LENGTH_INFO = 200;
const MAX_LENGTH_TEXT = 1000;
const MAX_LENGTH_PHONE = 16;

export const schemaCart = yup
  .object({
    fullName: yup.string().required(required).max(MAX_LENGTH_INFO, max),
    email: yup.string().required(required).matches(regExps.email, email).max(MAX_LENGTH_INFO, max),
    phone: yup.string().required(required).matches(regExps.phone, phone).max(MAX_LENGTH_PHONE, max),
    address: yup.string().max(MAX_LENGTH_TEXT, max),
    delivery: yup.string().required(required),
    promoCode: yup.string().max(MAX_LENGTH_INFO, max),
    policy: yup.boolean().required(required).oneOf([true], policy),
    comment: yup.string().max(MAX_LENGTH_TEXT, max),
    payment: yup.string().required(required),
  })
  .required();
