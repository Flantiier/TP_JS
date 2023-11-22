/**
 * Tells if the given number is odd or not
 * @param {number} value contains the number to operate on  
 * @returns if its even or odd
 */
function isEvenNumber(value){
    return value % 2 >= 0;
}

let value = 5;
let isEven = isEvenNumber(value);
console.log(isEven ? value + " is an even number." : value + " is an odd number.");