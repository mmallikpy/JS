// Onload handler
window.onload = () => {
    main()
}

function main() {
    let bg = document.getElementById('centered-div');
    let btn = document.getElementById('button');
    let val = document.getElementById('value');

    btn.addEventListener('click', function(){
        let bghexcolor = hexColorGenerator();
        bg.style.backgroundColor = bghexcolor;
        val.value = bghexcolor;
    })
}

// Hex color generator function
function hexColorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function copy(){
    let copy = document.getElementById("copy");
    let val = document.getElementById('value');
    copy.addEventListener('click', function(){
        let copyColor = navigator.clipboard.writeText(val.value);
        copy.innerHTML = "Copied"
        setTimeout(function(){
            copy.innerHTML = "Copy"
        },2000)
    })
}

copy()