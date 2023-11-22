/**
 * Add all numbers in parameters and return the result
 * @param  {number} numbers contains all the number to add
 * @returns the result of all additions
 */
function addNumbers(...numbers){
    let totalAmount = 0;
    for(let i = 0; i < numbers.length; i++){
        totalAmount += numbers[i];
    }
    return totalAmount;
}

let totalAmount = addNumbers(3, 13);
console.log("Le total est : " + totalAmount)