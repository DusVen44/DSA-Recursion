// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number 
// of sheep you have. The function should display the number along with the 
// message "Another sheep jumps over the fence" until no more sheep are left.

const sheepCounter = function(numOfSheep) {
    if (numOfSheep === 0) {
        return "All sheep jumped over the fence";
    } 
    return numOfSheep + " " + "Another sheep jumped over the fence." + sheepCounter(numOfSheep - 1); 
};

let sheep = 3;

console.log(sheepCounter(sheep));

$(".sheep-counter").append(`${sheepCounter(sheep)}`);