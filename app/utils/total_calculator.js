const CURRENCY_REGULAR_EXPRESSION = /(\d)(?=(\d{3})+(?!\d))/g;

module.exports = (products) => {
  const total = products
    .map(p => p.price)
    .reduce((a, b) => parseInt(a, 10) + parseInt(b));

  return total.toString().replace(CURRENCY_REGULAR_EXPRESSION, '$1,');
};
