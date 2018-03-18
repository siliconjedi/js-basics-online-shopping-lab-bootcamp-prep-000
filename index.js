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
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var cartString = "In your cart, you have, ";
    for (let i = 0; i < cart.length; i++)
    if (i < cart.length - 1){
      cartString += `${cart[i].itemName} at $${cart[i].itemPrice}`
    } else {
      cartString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    return cartString;
  }
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
