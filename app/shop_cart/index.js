const data = require('../data/products.json');
const Order = require('../orders');
const totalCalculator = require('../utils/total_calculator');

const ShopCart = () => ({
  products: [],
  addProduct: function(pCode) {
    this.products.push(
      data.products.find(p => p.code === pCode)
    );
  },
  makeOrder: function() {
    const id = Math.floor(Math.random() * Math.floor(9));
    const orderId = `o-00${id}`;

    const order = Order(orderId);
    this.products.forEach(p => order.addProduct(p.code));
    return order;
  },
  getTotal: function() {
    return totalCalculator(this.products);
  },
});

module.exports = ShopCart;
