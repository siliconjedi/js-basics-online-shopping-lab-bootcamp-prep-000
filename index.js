var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.random() * 100) + 1);
  var newObject = { itemName: item, itemPrice: price };
  cart.push(newObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1){
    return 
  }
}
//    var cartString = "In your cart, you have";

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
