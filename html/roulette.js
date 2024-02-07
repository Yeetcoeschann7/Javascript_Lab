"use strict";
console.log("Test Start\n");
let wheel_arr = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, -1, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];
let rand_i = Math.floor(Math.random() * 38); //Picks a random number between 0 and 38
let final_print = "Random number picked: ";

// Prints Number
if(wheel_arr[rand_i] == -1){
    final_print = final_print.concat("00, ");
}
else{
    final_print = final_print.concat(String(wheel_arr[rand_i]));
    final_print = final_print.concat(", ");
}

// Prints Color
if(rand_i % 2 == 0){
    final_print = final_print.concat("red, ");
}
else{
    final_print = final_print.concat("black, ");
}

// Prints Even/Odd
if(wheel_arr[rand_i] % 2 == 0){
    final_print = final_print.concat("even, ");
}
else{
    final_print = final_print.concat("odd, ");
}

// Prints Pass/Fail
if((wheel_arr[rand_i] >= 1 && wheel_arr[rand_i] <= 18) || wheel_arr[rand_i] == -1){
    final_print = final_print.concat("passed.");
}
else{
    final_print = final_print.concat("failed.");
}

console.log(final_print);