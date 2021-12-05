const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = batteryBatches.reduce(function(totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// })

// let totalBatteries = batteryBatches.reduce(function(totalBatteries, currentValue){
//     return totalBatteries + currentValue;
// })

let totalBatteries = batteryBatches.reduce(function (totalBatteries, currentValue) {
    return totalBatteries+currentValue
})

// function getTotal(batteryBatches){
//     let totalBatteries = 0;
//     for (const batch of batteryBatches) {
//         totalBatteries += batteryBatches.num;
//     };
//     return totalBatteries;
// }


/*
NOTES:

Given a list of shopping items, we want to find the total price:

const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];

function getTotalAmountForProducts(products) {
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price;
  };

  return totalPrice;
}

console.log(getTotalAmountForProducts(products)); // LOG: 33.46

we make a function(products), with a starting totalPrice of $0, then, for(let product of prodcts) we return the totalPrice +=product.price to find the

 */