function verifyUserValues(min, max, targetNumber, inputs){

    for (let i = 0; i < inputs.Length; i++) {
        const value = inputs[i];

        //Check if value is out of bounds
        if(value > max || value < min){
            console.log("Réponse invalide.");
        }
        else if(value > targetNumber){
            console.log("Plus");
        }
        else if(value < targetNumber){
            console.log("Moins");
        }
        else {
            console.log("Bonne réponse !");
        }
    }
}


let min = 0;
let max = 10;
let randomNumber = 5;

let inputs = [3, 7, 4, 5];
verifyUserValues(min, max, randomNumber, inputs);