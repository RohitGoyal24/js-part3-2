function prepareFood(tableNum, items, callback) {
    console.log('preparing food for items - ', items);
    callback(tableNum, items);
}

function serveFood(tableNum, items) {
    console.log('serving food for items - ', items);

}

var tableNum = 100;
var items = ["Burger", "pasta", "coke"];
prepareFood(tableNum, items, serveFood);