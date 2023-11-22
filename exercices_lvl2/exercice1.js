/**
 * Get the higher value of an array full of numbers
 * @param  {number} values all the values to compare
 * @returns the higher value in this array
 */
function getHigherNumber(...numbers){

    let higherValue = 0;
    for (const item of values) {
        if(item > higherValue){
            higherValue = item;
        }
    }

    return higherValue;
}

let values = [1, 3, 5, 20];
let higherValue = getHigherNumber(values);
console.log("Array : " + values.join());
console.log("The higher value in this array is " + higherValue);