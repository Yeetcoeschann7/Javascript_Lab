"use strict";
console.log("Test Start\n");
let rand_num = Math.floor(Math.random() * 36) - 1; //Picks a random number between -1 and 36
console.log("Random number picked: ");
if(rand_num == -1){
    console.log("00");
}
else{
    console.log(rand_num);
}