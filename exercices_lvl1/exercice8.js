/**
 * Calculate and show in the console the multiplication table of a given number
 * @param {number} multipliedNumber the number to calculate the table from 
 * @param {number} range the range of number to calculate in the table 
 */
function getMultiplicationTable(multipliedNumber, range){

    console.log("Multiplication table of " + multipliedNumber + " :");

    for(let i = 0; i < range + 1; i++){
        let value = multipliedNumber * i;
        console.log(multipliedNumber.toString() + " x " + i.toString() + " = " + value);
    }
}

getMultiplicationTable(8, 20);