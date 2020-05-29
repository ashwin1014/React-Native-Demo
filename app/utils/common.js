export const convertMoney = (
  amount,
  convertTo = 'paise',
  currency = 'INR',
  locale = 'en-IN',
) => {
  // Money will be sent in paise format from api.
  let money;
  if (convertTo === 'paise') {
    money = amount * 100;
  } else {
    money = amount / 100;
  }

  // eslint-disable-next-line no-undef
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(money).replace(/\D00$/, ''); // replacing .00
};

export const noop = () => {};
