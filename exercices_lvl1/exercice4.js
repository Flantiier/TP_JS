/**
 * A function that returns the value of age parameter
 * @param {number} age contains the age of the child 
 * @returns the value of age parameter
 */
function getChildAge(age){
    return age;
};

/**
 * A function that returns a child category based on the given age
 * @param {number} age contains the child age
 * @returns the child category
 */
function getChildCategory(age){
    switch(age){
        case age >= 12:
            return "Cadet";
        case age >= 10:
            return "Minime";
        case age >= 8:
            return "Pupille";
        default:
            return "Poussin";
    }
}

let childCategory = getChildCategory(getChildAge(11));
console.log("Category : " + childCategory);