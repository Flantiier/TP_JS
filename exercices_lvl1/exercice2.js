/**
 * Send a console message for each number between 0 and the range
 * @param {number} range contains the range of numbers to loop through
 */
function promptNumberInrange(range){
    for(let i = 0; i < range + 1; i++){
        console.log(i);
    }
}

let range = 100;
promptNumberInrange(range);