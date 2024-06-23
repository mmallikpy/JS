// Global variable diclaration
let first_input = document.getElementById('first_input');
let second_input = document.getElementById('second_input');
let copy_btn_1 = document.getElementById('copy_btn_1');
let copy_btn_2 = document.getElementById('copy_btn_2');
let changeColorBtn = document.getElementById('changeColorBtn')

function rawColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let raw_color = {
        red,
        green,
        blue,
    }
    return raw_color;
}

// function hex(){
//     let {red, green, blue} = rawColor()
//     if red.toString(16)>9 ? : 
// }
// hex()