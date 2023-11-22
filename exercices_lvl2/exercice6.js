/**
 * Generate a pyramid of characters with a given number of steps with centered characters
 * @param {number} stepsAmount the number of repetitions to create the pyramid steps
 * @param {string} character choose the character
 */
function generatePyramid(stepsAmount, character){

    for (let i = 0; i < stepsAmount; i++) {
        //Calculate the "space" before the first character
        let spacesAmount = (stepsAmount - (i + 1)) - 1;
        let message = "";

        //Puts spaceAmount before putting characters if required
        for (let j = 0; j < stepsAmount; j++) {
            message += j <= spacesAmount ? " " : character + " ";
        }

        console.log(message);
    }
}

generatePyramid(50, "☻");