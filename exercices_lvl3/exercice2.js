/**
 * Verify if the given input is the correct number
 * @param {number} input input from user 
 * @param {number} targetNumber the number to found 
 * @returns if the input from user is the same as the target number
 */
function verifyUserInputs(input, targetNumber){

    let targetNumberFound = input != targetNumber ? false : true;
    let userMessage = input > targetNumber ? "Moins" : input < targetNumber ? "Plus" : "Bonne réponse !";

    console.log(userMessage + " que " + input);
    return targetNumberFound;
}

/**
 * Decrease life if the number isn't found
 * @param {number} numberFound Indicates if the target number has been found 
 * @param {number} lifeAmount the current amount of life remaining 
 * @returns 
 */
function handleLifeAmount(numberFound, lifeAmount){
    return numberFound ? lifeAmount : --lifeAmount;
}

let lifeAmount = 8;
let targetNumber = 3;
let inputs = [1, 5, 2, 7, 0, 9, 5, 3];

for (let i = 0; i < inputs.length; i++) {
    let numberFound = verifyUserInputs(inputs[i], targetNumber);
    lifeAmount = handleLifeAmount(numberFound, lifeAmount);

    if(i >= inputs.length - 1 && !numberFound){
        console.log(`Il vous reste ${lifeAmount} vies.`);
        break;
    }
    else if (lifeAmount <= 0){
        console.log("C'est perdu...");
        break;
    }
}