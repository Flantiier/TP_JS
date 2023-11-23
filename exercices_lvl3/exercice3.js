/**
 * Convert a decimal number into binray
 * @param {number} convertedNumber The value to convert into binary
 * @returns Return the binary value
 */
// function convertDecimalToBinary(decimalNumber){

//     //Variable that contains the remainder of the division
//     let remainder = decimalNumber;
//     let reversedBinary = "";

//     do{
//         //Convert into binzary value
//         binaryValue = (remainder % 2);
//         //Floor the remainder
//         remainder = Math.floor(remainder / 2);
//         //Add the binary value to the binary number
//         reversedBinary += `${binaryValue}`;
//     }while(remainder > 0);

//     const result = reversedBinary.split('').reverse().join('');
//     console.log(`La valeur de ${decimalNumber} en binaire est : ${result}.`);
//     return result;
// }

/**
 * Convert a binzary number to a decimal number
 * @param {number} binaryNumber binary number to convert
 * @returns Return the decimal value
 */
// function convertBinaryToDecimal(binaryNumber){

//     let maxPow = binaryNumber.toString().length - 1;
//     let result = 0;

//     for (let i = 0; i <= maxPow; i++) {
//         let calcul = binaryNumber[i] * Math.pow(2, maxPow - i);
//         result += calcul;
//     }

//     console.log("La valeur de " + binaryNumber + " en décimal est : " + result);
//     return result;
// }

/**
 * Return the maximum power of a number based on its base
 * @param {number} convertedNumber the nomber to find maximum power
 * @param {number} base the base of the number
 * @returns the max power for the number according to the given base
 */
function getMaxPow(convertedNumber, base){
    let i = 0;
    while(convertedNumber > Math.pow(base, i)){
        i++;
    }

    return i;
}

/**
 * Reverse all the characters in a string
 * @param {string} string string to reverse
 * @returns reversed string
 */
function invertString(string){
    return string.split('').reverse().join('');
}

/**
 * Convert a number (base 10) into a given base
 * @param {number} convertedNumber the number to convert 
 * @param {number} base the base to convert the number
 * @returns the converted number based on the given base
 */
function convertDecimalToBase(convertedNumber, base){

    let maxPow = getMaxPow(convertedNumber, base);    
    let result = "";
    let remainder = convertedNumber;

    for (let i = maxPow - 1; i >= 0; i--) {
        const powValue = Math.pow(base, i);
        let baseValue = Math.floor(remainder / powValue).toString(36).toUpperCase();
        remainder = Math.floor(remainder % powValue);

        result += baseValue;
    }

    console.log(`La valeur de ${convertedNumber} en base ${base} est : ${result}`);
    return result;
}

/**
 * Convert a number from a given base into base 10 
 * @param {number} convertedNumber the number to convert
 * @param {number} base base to convert into
 * @returns the converted number in base 10
 */
function convertBaseToDecimal(convertedNumber, base){
    const string = String(convertedNumber);
    const maxPow = getMaxPow(convertedNumber, 10);
    let result = 0;

    for (let i = 0; i < maxPow; i++) {
        const number = Number(string[i]);
        result += number * Math.pow(base, maxPow - i - 1);
    }

    console.log(`La valeur de ${convertedNumber} en base ${base} vaut en base 10 : ${result}`);
    return result;
}

/**
 * Convert a hexadecimal number into decimals according to its base
 * @param {number} convertedNumber the hexadecimal number to convert
 * @param {number} base the base of the hexadecimal number
 */
function convertHexaToDecimal(convertedNumber, base){
    const result = parseInt(convertedNumber, base);
    console.log(`La valeur de ${convertedNumber} en base ${base} vaut en base 10 : ${result}`);
}

//DECIMAL => BASES
convertDecimalToBase(162, 2);
convertDecimalToBase(100, 3);

//BASES => DECIMAL
convertBaseToDecimal(2230, 7);  // => 805
convertBaseToDecimal(13321, 4); // => 505

//HEXADECIMAL => DECIMAL
convertDecimalToBase(5632, 22);
convertHexaToDecimal("BE0", 22);