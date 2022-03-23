var items1 = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}

function partitionOn(pred, items) {
    let newArr
    return items.filter(pred)
}

console.log(partitionOn(isEven, items1));
