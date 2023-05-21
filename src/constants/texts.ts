export const TEXT = {
  common: {
    rub: '₽',
  },
  header: {
    logo: 'A-Store',
    burger: 'меню',
  },
  footer: {
    copyright: '© ООО «Альфа Фьюче Пипл», 2022',
    policy: 'Политика конфиденциальности и обработки персональных данных',
  },
  pages: {
    alfaMade: 'Сделано в Альфе',
    customDesign: 'Свой дизайн',
    contact: 'Контакты',
    cart: 'Корзина',
    policy: 'Политика конфиденциальности',
    page404: 'page404',
  },
  contacts: {
    email: 'info@alfabankstore.ru',
    tel: '+7 906 061-60-20',
    wa: 'https://wa.me/79060616020',
    address: 'г. Москва, пр-т Андропова, 18 корп. 3',
    wakingDaysLabel: 'пн-чт:',
    wakingDays: '10:00—19:00',
    lastDaysLabel: 'пт:',
    lastDays: '10:00—17:30',
    acceptPayment: 'Принимаем к оплате карты Visa, Mastercard, МИР.',
  },
  alfaMade: {
    subTitle: 'Хотим каждую из этих вещей! Себе, родным и друзьям',
    outOfStock: 'Временно не доступен',
  },
  customDesign: {
    subTitle:
      'Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото',
    stickerText: 'Есть такой стикер и еще',
    text: 'Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.',
  },
  page404: {
    errotText: 'Ошибка 404',
    mainText: 'Запрашиваемая страница не найдена',
    buttonText: 'На главную',
  },
  productCardPage: {
    buttonSubmit: 'В корзину',
  },
  cart: {
    colorLabel: 'цвет',
    sizeLabel: 'размер',
    stickerLabel: 'номер стикера',
    modelLabel: 'модель',
    sidePanelTitle: 'Ваш заказ',
    buttonNextText: 'Дальше',
    sumText: 'Сумма',
    sumTotalText: 'Итоговая сумма',
  },
  notes: {
    errorFetchText: 'Произошла ошибка',
  },
};

export const FORM_PRODUCT = {
  colors: {
    inputName: 'colors',
    inputLabel: 'Цвет',
    inputErrorText: 'Выберите цвет',
  },
  sizes: {
    inputName: 'sizes',
    inputLabel: 'Размер',
    inputErrorText: 'Выберите размер',
  },
  stickerNumbers: {
    inputName: 'stickerNumbers',
    inputLabel: 'Стикер',
    inputErrorText: 'Выберите стикер',
  },
  models: {
    inputName: 'models',
    inputLabel: 'Модель',
    inputErrorText: 'Выберите модель',
  },
} as const;

export const FORM_CART = {
  fullName: {
    inputName: 'fullName',
    inputLabel: 'ФИО',
    placeholder: 'Фамилия Имя Отчество',
  },
  email: {
    inputName: 'email',
    inputLabel: 'e-mail',
    placeholder: 'example@site.ru',
  },
  phone: {
    inputName: 'phone',
    inputLabel: 'Телефон',
    placeholder: '+7 000 000 00 00',
  },
  address: {
    inputName: 'address',
    inputLabel: 'Адрес (если вы выбрали самовывоз — оставьте поле пустым)',
    placeholder: 'Индекс, город, улица, дом, квартира',
  },
  delivery: {
    inputName: 'delivery',
    inputLabel: 'Доставка',
    radioList: [
      { value: 'russia', label: 'Доставка по России — 350₽' },
      { value: 'moscow', label: 'Курьером по Москве — 300₽' },
      { value: 'self', label: 'Самовывоз (пр-т Андропова, 18 корп. 3)' },
    ],
    emptyDelivery: 'Выберете способ доставки',
  },
  promoCode: {
    inputName: 'promoCode',
    inputLabel: 'Промокод',
    promoCodeText: 'Проверить',
  },
  policy: {
    inputName: 'policy',
    checkboxLabel: 'Согласен с политикой конфиденциальности и обработки персональных данных',
  },
  comment: {
    inputName: 'comment',
    inputLabel: 'Комментарий к заказу',
  },
  payment: {
    inputName: 'payment',
    inputLabel: 'Способ оплаты',
    subtitle:
      'Выберите способ оплаты «Промокод», если ваш заказ не превышает сумму промокода. Если больше — выберите оплату картой.',
    radioList: [
      { value: 'bankCard', label: 'Банковская карта' },
      { value: 'promo', label: 'Промокод' },
    ],
  },
  error: {
    required: 'Пожалуйста, заполните все обязательные поля',
    max: 'Превышена максимальная длинна',
    email: 'Введите валидный e-mail',
    phone: 'Укажите, пожалуйста, корректный номер телефона',
    policy: 'Нужно согласиться с политикой',
  },
};
