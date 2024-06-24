// Global variable diclaration
let first_input = document.getElementById('first_input');
let second_input = document.getElementById('second_input');
let copy_btn_1 = document.getElementById('copy_btn_1');
let copy_btn_2 = document.getElementById('copy_btn_2');
let changeColorBtn = document.getElementById('changeColorBtn');
let container = document.getElementById('container');
let tostMessage = document.getElementById('tostMessage')

// For main color generator
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

// For hexa color generator
function hex(allColor) {
    let { red, green, blue } = allColor;
    let redTest = red.toString(16);
    let greenTest = green.toString(16);
    let blueTest = blue.toString(16);
    let finalRed = redTest.length === 1 ? `0${redTest}` : redTest;
    let finalGreen = greenTest.length === 1 ? `0${greenTest}` : greenTest;
    let finalblue = blueTest.length === 1 ? `0${blueTest}` : blueTest;
    return `#${finalRed}${finalGreen}${finalblue}`;

}
// For rgb color generator
function mrgb(allColor) {
    let { red, green, blue } = allColor;
    return `rgb(${red}, ${green}, ${blue})`;
}

// Background color change function.
function changeColor() {
    changeColorBtn.addEventListener('click', function () {
        let allColor = rawColor();
        let hexColor = hex(allColor);
        let rgbColor = mrgb(allColor);
        first_input.value = hexColor;
        second_input.value = rgbColor;
        container.style.backgroundColor = rgbColor;
    })
}
changeColor()

// Color copy using copy btn and tost message
function colorCopy(btnInput,fieldInput) {
    btnInput.addEventListener('click', function () {
        navigator.clipboard.writeText(fieldInput.value)
        tostStringPrint(fieldInput.value)
        function tostStringPrint(val) {
            let tostMessageDiv = document.createElement('div');
            tostMessageDiv.classList.add('tostMessage', 'tostMessageAnimation_in');
            tostMessageDiv.innerHTML = `${val}`;
            document.body.appendChild(tostMessageDiv);
            // Remove tost message after click on the message.
            tostMessageDiv.addEventListener('click', function () {
                tostMessageDiv.classList.remove('tostMessageAnimation_in');
                tostMessageDiv.classList.add('tostMessageAnimation_out');
                tostMessageDiv.addEventListener('animationend', function () {
                    tostMessageDiv.classList.remove('tostMessage');
                })
            })
            // Autometicall remove the tost message after 5s
            setTimeout(function () {
                tostMessageDiv.classList.add('tostMessageAnimation_out');
                tostMessageDiv.addEventListener('animationend', function () {
                tostMessageDiv.classList.remove('tostMessage');
                })
            }, 5000)
        }
    })
}
colorCopy(copy_btn_1, first_input)
colorCopy(copy_btn_2, second_input)

// Manual color add using input box
function manulColor() {
    document.addEventListener('input', function () {
        console.log(first_input.value);
        let x = first_input.value
        if(x.length == 6){
            let reg_p = x.match(/[A-Fa-f0-9]{6}/i);
            reg = '#'+ reg_p
            container.style.backgroundColor = reg
            colorCopy(reg)

        }
    })
}
manulColor()
console.log("test")
