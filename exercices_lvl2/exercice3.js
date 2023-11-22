/**
 * Calculate the sum of all numbers in the range
 * @param {number} range all the numbers to add
 * @returns the sum of all numbers
 */
function getSumFromRange(range){
    let totalAmount = 0;
    for (let index = 0; index < range + 1; index++) {
        totalAmount += index;
    }

    return totalAmount;
}

let sum = getSumFromRange(5);
console.log(sum);
