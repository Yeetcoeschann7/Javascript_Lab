"use strict";

let sock;

function main(){
    // Websocket creation and event handlers
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{ 
        console.log("SOCK IS OPEN");
    });
    sock.addEventListener("message", gotMessage);

    console.log("Test Start\n");
    let output_table = document.getElementById("output_table");
    let spin_button = document.getElementById("spin_button");
    let wheel_arr = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, -1, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

    spin_button.addEventListener("mouseover", () => {
        spin_button.style.backgroundColor="#808080";
    });
    spin_button.addEventListener("mouseout", () => {
        spin_button.style.backgroundColor="#ebebeb"; //reset to default
    });
    spin_button.addEventListener("click", () => {
        spin_wheel(wheel_arr,output_table);
    });
}

function spin_wheel(wheel_arr){
    let rand_i = Math.floor(Math.random() * 38); //Picks a random number between 0 and 38
    let final_print = "Spin outcome: ";
    let new_row = document.createElement("tr");
    let number = document.createElement("th");
    let color = document.createElement("th");
    let pairity = document.createElement("th");
    let pass = document.createElement("th");
        
    // Prints Number
    if(wheel_arr[rand_i] == -1){
        final_print = final_print.concat("00, ");
        number.innerHTML = "00";
    }
    else{
        final_print = final_print.concat(String(wheel_arr[rand_i]));
        final_print = final_print.concat(", ");
        number.innerHTML = String(wheel_arr[rand_i]);
    }
    new_row.appendChild(number);
    
    // Prints Color
    if(rand_i % 2 == 0){
        final_print = final_print.concat("red, ");
        color.innerHTML = "Red"
        color.style.backgroundColor = "Red";
    }
    else{
        final_print = final_print.concat("black, ");
        color.innerHTML = "black"
        color.style.backgroundColor = "Black";
        color.style.color = "White";
        color.style.border = "Black";
    }
    new_row.appendChild(color);

    // Prints Even/Odd
    if(wheel_arr[rand_i] % 2 == 0){
        final_print = final_print.concat("even, ");
        pairity.innerHTML = "even"
        pairity.style.backgroundColor = "Pink";
    }
    else{
        final_print = final_print.concat("odd, ");
        pairity.innerHTML = "odd"
        pairity.style.backgroundColor = "PapayaWhip";
    }
    new_row.appendChild(pairity);

    // Prints Pass/Fail
    if((wheel_arr[rand_i] >= 1 && wheel_arr[rand_i] <= 18) || wheel_arr[rand_i] == -1){
        final_print = final_print.concat("passed.");
        pass.innerHTML = "passed"
        pass.style.backgroundColor = "LightGreen";
    }
    else{
        final_print = final_print.concat("failed.");
        pass.innerHTML = "failed"
        pass.style.backgroundColor = "PeachPuff";
    }
    new_row.appendChild(pass);

    // Outputs outcome of spin
    console.log(final_print);
    sock.send(new_row.innerHTML);
}

function gotMessage(event){
    console.log("GOT MESSAGE");

    let output_table = document.getElementById("output_table");
    let new_row = document.createElement("tr");

    new_row.innerHTML = event.data;
    output_table.appendChild(new_row);
}

main();