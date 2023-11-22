/**
 * Generate a reversed stair of characters with a given number of steps
 * @param {number} stepsAmount the number of repetitions to create the stairs
 * @param {string} character choose the character
 */
function generateReversedStairs(stepsAmount, character){
    
    //loop to create different "steps" but reversed
    for (let i = stepsAmount - 1; i >= 0; i--) {
        let message = "";
        //At each step, create an amount of characters based on the value of the current step
        for (let j = i; j >= 0; j--) {
            message += character + " ";
        }

        console.log(message);
    }
}

generateReversedStairs(5, "☻");