// JS DOM
const container = document.getElementById('container')
const inputBox = document.getElementById('input-box')
const copyBtn = document.getElementById('copy-btn')
const colorGen = document.getElementById('color-generator')

function colorGenerator (){
    let red = Math.floor(Math.random()*255).toString(16)
    let green = Math.floor(Math.random()*255).toString(16)
    let blue = Math.floor(Math.random()*255).toString(16)
    return `#${red}${green}${blue}`
}
let hexColor =''
function backgroundChange(){    
    colorGen.addEventListener('click', function(){
        hexColor = colorGenerator ()
        container.style.backgroundColor = hexColor
        inputBox.value = hexColor
    })
}
backgroundChange()

function tostMessage(hexValue){
    let tostDiv = document.createElement('div');
    tostDiv.classList.add('tostMessage', 'tostAnimationIn');
    tostDiv.innerHTML = hexValue
    document.body.appendChild(tostDiv)
    tostDiv.addEventListener('click', function(){
        tostDiv.classList.remove('tostAnimationIn')
        tostDiv.classList.add('tostAnimationOut')
        tostDiv.addEventListener('animationend',function(){
            tostDiv.remove()
        })
    })
    const dr = setTimeout(divRemove, 2000)
    function divRemove(){
        tostDiv.classList.add('tostAnimationOut')
        tostDiv.addEventListener('animationend', function(){
            tostDiv.remove()
        })
        
    }
}
function copy(){
    copyBtn.addEventListener('click', function(){
       let hexValue = navigator.clipboard.writeText(inputBox.value);
       tostMessage(hexColor)
    })
}
copy()

// User input the color code and it will change the background
function userColorInput() {
    let text = document.getElementById("input-box");
    text.addEventListener('input',function(){
        let x = document.getElementById("input-box").value;
        if(x.length == 6){
            let reg = x.match(/[A-Fa-f0-9]{6}/i);
            reg = '#'+ reg
            container.style.backgroundColor = reg
            tostMessage(reg)
        }
    })
  }

userColorInput()
