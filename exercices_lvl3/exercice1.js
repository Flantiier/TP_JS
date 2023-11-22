/**
 * Check if the value is a multiple of 3 or 5 or not
 * @param {number} value the value to check if its a multiple of 3 or 5
 * @returns A message according to the value : multiple of 3 & 5 => FIZZBUZZ
 *                                             multiple of 3 only => FIZZ
 *                                             multiple of 5 only => BUZZ
  *                                            not a multiple => value
 */
function isMultipleOf(value){
    if(value % 3 <= 0 && value % 5 <= 0){
        return "FIZZBUZZ";
    }
    else if(value % 3 <= 0){
        return "FIZZ";
    }
    else if(value % 5 <= 0){
        return "BUZZ";
    }
    else{
        return value;
    }
}

console.log(isMultipleOf(0));
console.log(isMultipleOf(1));
console.log(isMultipleOf(2));
console.log(isMultipleOf(5));
console.log(isMultipleOf(6));
console.log(isMultipleOf(8));