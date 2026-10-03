// Declare a variable for user's account status(active), which can change over time
let cart = {
  online: false,
  cartItems: 3,
  itemsName: "laptop shoe clothes",
  quantity: 3,
  price: "2500 for one item",
  totalPrice: 7500,
};
// variable for the store tax rate (0.075)
const taxRate = {
  taxRate: "0.075 in every season",
};

// why not to use let for everything
// If you use let for evrything it could cause one big issue that may be lead to accidental reassignment so what i am trying to say is that it may cause you to do the assignment again using let for evrything is not adviseble
