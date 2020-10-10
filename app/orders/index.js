const data = require('../data/products.json');
const totalCalculator = require('../utils/total_calculator');

const Order = (orderId) => ({
  orderId,
  products: [],
  addProduct: function(pCode) {
    this.products.push(
      data.products.find(p => p.code === pCode)
    );
  },
  getTotal: function() {
    return totalCalculator(this.products);
  }
});

module.exports = Order;
