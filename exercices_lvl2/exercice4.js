/**
 * Generate a stair of characters with a given number of steps
 * @param {number} stepsAmount the number of repetitions to create the stairs
 * @param {string} character choose the character
 */
function generateStairs(stepsAmount, character){

    //loop to create different "steps"
    for (let i = 0; i < stepsAmount + 1; i++) {
        let message = "";
        //At each step, create an amount of characters based on the value of the current step
        for (let j = 0; j < i; j++) {
            message += character + " ";
        }

        console.log(message);
    }
}

generateStairs(5, "☻");