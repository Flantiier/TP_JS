/**
 * A function that return the given username
 * @param {string} username contains the name of the user
 * @returns the value of the username parameter
 */
function getUserName(username){
    return username;
}

/**
 * Say a welcome message in the console to the user 
 * @param {string} username contains the name of the user 
 */
function sayHelloToUser(username){
    console.log("Welcome " + username + " !");
}

let user = getUserName("Luc");
sayHelloToUser(user);