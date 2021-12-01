const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = batteryBatches.reduce(function(totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// })

let totalBatteries = batteryBatches.reduce(function(totalBatteries, currentValue){
    return totalBatteries + currentValue;
})

// function getTotal(batteryBatches){
//     let totalBatteries = 0;
//     for (const batch of batteryBatches) {
//         totalBatteries += batteryBatches.num;
//     };
//     return totalBatteries;
// }