// let color = "Red";
color = "Green";
// color = "Orange";
// color = "Blue";

//Affiche un message dans la console avec un if else statement
let message;
if (color == "Red"){
    message = "Rouge";
}
else if (color == "Orange"){
    message = "Orange";
}
else if (color == "Green"){
    message = "Vert";
}
else {
    message = "Pas bon";
}
console.log("if else message : " + message);


//Affiche un message dans la console avec le switch statement
let switchMessage;
switch(color){
    case "Red":
        switchMessage = "C'est rouge, stop";
        break;
    case "Orange":
        switchMessage = "C'est orange, faut freiner";
        break;
    case "Green":
        switchMessage = "C'est vert, faut rouler";
        break;
    default:
        switchMessage = "C'est pas bon";
        break;
}
console.log("switch message : " + switchMessage);


//Affiche un message dans la console avec le ternary orperator
let ternaryMessage;
ternaryMessage = color == "Red" ? "Arrêtez-vous !" :
             color == "Orange" ? "Préparez vous à vous arrêter !" :
             color == "Green" ? "Avancez !" : "Cette couleur n'éxiste pas...";

console.log("ternary message : " + ternaryMessage);  