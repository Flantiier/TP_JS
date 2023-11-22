/**
 * Gives a note based on the given test score entered
 * @param {number} testScore the test score of the student
 * @returns the note according to the score
 */
function convertTestScoreIntoNote(testScore){
    //Value between 20 and 18
    if(testScore >= 18){
        return "Excellent, bon travail";
    }
    //Value between 17 and 15 
    else if(testScore >= 15){
        return "Bien";
    }
    //Value between 14 and 11
    else if(testScore >= 11){
        return "Peut mieux faire";
    }
    //Value between 10 and 5
    else if(testScore >= 5){
        return "Insuffisant";
    }
    //Value between 4 and 0
    else{
        return "Catastrophique, il faut tout revoir";
    }
}

console.log("Luis's test note: " + convertTestScoreIntoNote(11));  //Should return <<Peut mieux faire>>
console.log("Lily's test note: " + convertTestScoreIntoNote(6));   //Should return <<Insuffisant>>
console.log("Mario's test note: " + convertTestScoreIntoNote(0));  //Should return <<Catastrophique>>
console.log("Luigi's test note: " + convertTestScoreIntoNote(20)); //Should return <<Excellent>>
console.log("David's test note: " + convertTestScoreIntoNote(16)); //Should return <<Bien>>