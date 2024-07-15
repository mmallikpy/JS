// Global variable diclaration
let randomColor = document.getElementById("randomColor");
let slide1 = document.getElementById("myRange1")
let slide2 = document.getElementById("myRange2")
let slide3 = document.getElementById("myRange3")
let rbgbox = document.getElementById("rgbColor")
let hexbox = document.getElementById("hexColor")
let spanOut = document.getElementById("spanOut")
let spanOut1 = document.getElementById("spanOut1")
let spanOut2 = document.getElementById("spanOut2")
let color = document.getElementById("color")
// For main color generator
function rawColor() {
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

// For rgb color generator
function mrgb(allColor) {
    let { red, green, blue } = allColor;
    return `${red}, ${green}, ${blue}`;
}
// For hexa color generator
function hex(allColor) {
    let { red, green, blue } = allColor;
    // let red, green, blue;
    let redTest = red.toString(16);
    let greenTest = green.toString(16);
    let blueTest = blue.toString(16);
    let finalRed = redTest.length === 1 ? `0${redTest}` : redTest;
    let finalGreen = greenTest.length === 1 ? `0${greenTest}` : greenTest;
    let finalblue = blueTest.length === 1 ? `0${blueTest}` : blueTest;
    return `${finalRed}${finalGreen}${finalblue}`;

}


// Random color generator button
console.log(randomColor.addEventListener('click', function () {
    
    let red = rawColor().red
    let green = rawColor().green
    let blue = rawColor().blue
    slide1.value = red
    slide2.value = green
    slide3.value = blue
    let raw_color = {
        red,
        green,
        blue,
    }
 
    rbgbox.value = `RGB(${red}, ${green}, ${blue})`
    hexbox.value = hex(raw_color)
    spanOut.innerHTML = red
    spanOut1.innerHTML = green
    spanOut2.innerHTML = blue
    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}))
// Hex to RGB
function hexToRGB(hex_val) {
    let red = parseInt(hex_val.input.slice(0, 2), 16);
    let green = parseInt(hex_val.input.slice(2, 4), 16);
    let blue = parseInt(hex_val.input.slice(4), 16);
    return `${red}, ${green}, ${blue}`;
}

// Manual color add using input box
function manulColor() {
    document.addEventListener('input', function () {
        let x = hexbox.value
        if (x.length == 6) {
            let reg_p = x.match(/[A-Fa-f0-9]{6}/i);
            reg = '#' + reg_p
            color.style.backgroundColor = reg
            // colorCopy(reg)
            // console.log("Test---", reg_p)
            let rgb_final = hexToRGB(reg_p)
            rbgbox.value = `RGB(${rgb_final})`
            let splitValue = rgb_final.split(',')
            let { red, green, blue } = splitValue
            
            slide1.value = splitValue[0]
            slide2.value =  splitValue[1].split(' ')[1]
            slide3.value = splitValue[2].split(' ')[1]
            spanOut.innerHTML = splitValue[0]
            spanOut1.innerHTML = splitValue[1].split(' ')[1]
            spanOut2.innerHTML = splitValue[2].split(' ')[1]
                        
        }
    })
}

function rangeSliderValueCollect(sliderName) {
    sliderName.addEventListener('input', function () {
        // console.log(sliderName.value)
        return sliderName.value
    })
}
function dataCollectionFromSlider() {
    let slider1 = rangeSliderValueCollect(slide1)
    let slider2 =rangeSliderValueCollect(slide2)
    let slider3 = rangeSliderValueCollect(slide3)
    console.log(`RGB(${slider1})`)
    let slider5 = {
        red: slider1,
        green: slider2,
        blue: slider3
    }
    let hexColor = hex(slider5)
    // console.log(hexColor)
}
dataCollectionFromSlider()


manulColor()
if (location.reload) {
    rbgbox.value = "";
    hexbox.value = "";
    slide1.value = 0;
    slide2.value = 0;
    slide3.value = 0;
}

// slide1.addEventListener('input',function () {
//     console.log(slide1.value)
// })



// // Global variable diclaration
// let first_input = document.getElementById('first_input');
// let second_input = document.getElementById('second_input');
// let copy_btn_1 = document.getElementById('copy_btn_1');
// let copy_btn_2 = document.getElementById('copy_btn_2');
// let changeColorBtn = document.getElementById('changeColorBtn');
// let container = document.getElementById('container');
// let tostMessage = document.getElementById('tostMessage')





// // Background color change function.
// function changeColor() {
//     changeColorBtn.addEventListener('click', function () {
//         let allColor = rawColor();
//         let hexColor = hex(allColor);
//         let rgbColor = mrgb(allColor);
//         first_input.value = hexColor;
//         second_input.value = rgbColor;
//         container.style.backgroundColor = rgbColor;
//     })
// }
// changeColor()

// // Color copy using copy btn and tost message
// function colorCopy(btnInput,fieldInput) {
//     btnInput.addEventListener('click', function () {
//         navigator.clipboard.writeText(fieldInput.value)
//         tostStringPrint(fieldInput.value)
//         function tostStringPrint(val) {
//             let tostMessageDiv = document.createElement('div');
//             tostMessageDiv.classList.add('tostMessage', 'tostMessageAnimation_in');
//             tostMessageDiv.innerHTML = `${val}`;
//             document.body.appendChild(tostMessageDiv);
//             // Remove tost message after click on the message.
//             tostMessageDiv.addEventListener('click', function () {
//                 tostMessageDiv.classList.remove('tostMessageAnimation_in');
//                 tostMessageDiv.classList.add('tostMessageAnimation_out');
//                 tostMessageDiv.addEventListener('animationend', function () {
//                     tostMessageDiv.classList.remove('tostMessage');
//                 })
//             })
//             // Autometicall remove the tost message after 5s
//             setTimeout(function () {
//                 tostMessageDiv.classList.add('tostMessageAnimation_out');
//                 tostMessageDiv.addEventListener('animationend', function () {
//                 tostMessageDiv.classList.remove('tostMessage');
//                 })
//             }, 5000)
//         }
//     })
// }
// colorCopy(copy_btn_1, first_input)
// colorCopy(copy_btn_2, second_input)



// /**
//  * convert hex color
//  * @param {string} hex_val
//  */



