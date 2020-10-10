const Order = require('./app/orders');
const ShopCart = require('./app/shop_cart');

function main() {
  const order = Order("o-001");
  order.addProduct("001");
  order.addProduct("002");

  console.log(order.getTotal());
  console.log(order);

  const shop = ShopCart();
  shop.addProduct("003");
  shop.addProduct("002");
  const orderFromShoppingCart = shop.makeOrder();

  console.log(shop.getTotal());
  console.log(orderFromShoppingCart);
}

main();