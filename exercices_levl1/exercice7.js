/**
 * Tells if the given number is positive or negative
 * @param {number} value contains the number to operate on
 * @returns if its negative or positive
 */
function isPositiveNumber(value){
    return value >= 0;
}

let value = 4;
let isPositive = isPositiveNumber(value);
console.log(isPositive ? value + " is a positive number." : value + " is a negative number.");