var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.Random() * 100) + 1);
  var newObject = { itemName:`${item}`, itemPrice:`${price}` };
  cart.push(newObject);
return `$
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
